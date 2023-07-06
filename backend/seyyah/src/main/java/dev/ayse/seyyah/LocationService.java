package dev.ayse.seyyah;

import dev.ayse.seyyah.model.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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
                      result.address().address(),
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
                response.address().address(),
                response.latitude(),
                response.longitude(),
                response.rating(),
                response.ratingImage(),
                photo(response.locationId()),
                response.subratings().values().stream().toList()
        );
    }
}
