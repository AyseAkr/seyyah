package dev.ayse.seyyah;

import dev.ayse.seyyah.model.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.ZoneOffset;
import java.util.List;

@Service
public class LocationService {
    @Value("${apikey}")
    String apikey;
    @Value("${baseurl}")
    String baseURL;
    RestTemplate restTemplate = new RestTemplate();

    public List<SearchResponseDTO> search(String searchQuery, String category) {
      TripAdvisorSearchResults response =  restTemplate.getForObject
              (baseURL+"search?key="+apikey+"&searchQuery="+searchQuery+"&category="+category+"&language=en",
                      TripAdvisorSearchResults.class);

      return response.data().stream().skip(2).parallel().map(result ->
              new SearchResponseDTO(result.locationId(),
                      getAddress(result.address()),
                      result.name(),
                      photo(result.locationId()))).toList();
    }

    public List<TripAdvisorPhotoResult> photo(String locationId) {
        TripAdvisorPhotoResults response =  restTemplate.getForObject
                (baseURL+ locationId +"/photos?language=en&key="+apikey,
                        TripAdvisorPhotoResults.class);

        return response.data();
    }

    public LocationDetailDTO locationDetail(String locationId){
        TripAdvisorLocationDetail response = restTemplate.getForObject(
                baseURL+ locationId+"/details?language=en&currency=EUR&key="+apikey,
                TripAdvisorLocationDetail.class);

        return new LocationDetailDTO(
                response.locationId(),
                response.name(),
                response.description(),
                getAddress(response.address()),
                response.latitude(),
                response.longitude(),
                response.rating(),
                response.ratingImage(),
                photo(response.locationId()),
                getLocationSubratings(response),
                reviews(response.locationId())
        );
    }

    public List<ReviewDTO> reviews(String locationId) {
        TripAdvisorReviewResults response = restTemplate.getForObject(
                baseURL+ locationId+"/reviews?language=en&key=" +apikey,
                TripAdvisorReviewResults.class);
        return response.data().stream().map(review -> new ReviewDTO(
                review.publishedDate(),
                review.rating(),
                review.ratingImageUrl(),
                review.text(),
                review.title(),
                review.travelDate().atStartOfDay(ZoneOffset.UTC),
                review.user().username(),
                review.user().avatar(),
                getReviewSubratings(review)
        )).toList();
    }

    private String getAddress(TripAdvisorAddress address) {
        if (address == null) {
            return "";
        }
        return address.address();
    }

    private List<TripAdvisorSubRatings> getLocationSubratings(TripAdvisorLocationDetail response) {
        if (response.subratings() == null) {
            return List.of();
        }
        return response.subratings().values().stream().toList();
    }

    private List<TripAdvisorSubRatings> getReviewSubratings(TripAdvisorReviewResult review) {
        if (review.subratings() == null) {
            return List.of();
        }
        return review.subratings().values().stream().toList();
    }
}
