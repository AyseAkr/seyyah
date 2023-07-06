package dev.ayse.seyyah.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public record TripAdvisorLocationDetail(@JsonProperty("location_id") String locationId, String name,
                                        String description, @JsonProperty("address_obj")TripAdvisorAddress address,
                                        String latitude, String longitude, String rating,
                                        @JsonProperty("rating_image_url")String ratingImage,
                                        Map<String,TripAdvisorSubRatings> subratings) {
}
