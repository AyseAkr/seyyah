package dev.ayse.seyyah.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record TripAdvisorSubRatings(@JsonProperty("localized_name") String localizedName,
                                 @JsonProperty("rating_image_url") String ratingURL,
                                 String value) {
}
