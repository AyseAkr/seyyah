package dev.ayse.seyyah.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.Map;

public record TripAdvisorReviewResult(@JsonProperty("published_date") ZonedDateTime publishedDate,
                                      String rating,
                                      @JsonProperty("rating_image_url") String ratingImageUrl,
                                      String text,
                                      String title,
                                      @JsonProperty("travel_date") LocalDate travelDate,
                                      TripAdvisorUser user,

                                      Map<String, TripAdvisorSubRatings> subratings) {
}
