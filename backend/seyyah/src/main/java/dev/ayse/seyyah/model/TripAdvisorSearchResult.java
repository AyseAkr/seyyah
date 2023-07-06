package dev.ayse.seyyah.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record TripAdvisorSearchResult(@JsonProperty("location_id") String locationId, String name,
                                      @JsonProperty("address_obj") TripAdvisorAddress address) {
}
