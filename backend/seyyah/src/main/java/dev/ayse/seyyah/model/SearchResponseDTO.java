package dev.ayse.seyyah.model;

import java.util.List;

public record SearchResponseDTO(String id, String address, String name, List<TripAdvisorPhotoResult> photos ) {
}
