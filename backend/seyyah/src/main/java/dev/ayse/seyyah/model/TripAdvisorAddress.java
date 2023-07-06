package dev.ayse.seyyah.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public record TripAdvisorAddress(@JsonProperty("address_string") String address) {
}
