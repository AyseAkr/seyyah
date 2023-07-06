package dev.ayse.seyyah.model;

import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;

public record ReviewDTO(ZonedDateTime publishedDate,
                        String rating,
                        String ratingImageUrl,
                        String text,
                        String title,
                        ZonedDateTime travelDate,
                        String user,
                        TripAdvisorUserAvatar avatar,

                        List<TripAdvisorSubRatings> subratings) {
}
