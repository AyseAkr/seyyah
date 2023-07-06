package dev.ayse.seyyah.model;

import java.util.List;

public record LocationDetailDTO(String locationId,
                                String name,
                                String description,
                                String address,
                                String latitude,
                                String longitude,
                                String rating,
                                String ratingImage,
                                List<TripAdvisorPhotoResult> photos,
                                List<TripAdvisorSubRatings> subratings) {
}
