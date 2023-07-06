package dev.ayse.seyyah;

import dev.ayse.seyyah.model.LocationDetailDTO;
import dev.ayse.seyyah.model.SearchResponseDTO;
import dev.ayse.seyyah.model.TripAdvisorLocationDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/locations")
public class LocationController {
    @Autowired
    LocationService locationService;

    @GetMapping("/search")
    public List<SearchResponseDTO> search(@RequestParam String searchQuery, @RequestParam String category) {
        return locationService.search(searchQuery,category);
    }

    @GetMapping("/{id}")
    public LocationDetailDTO searchDetail(@PathVariable String id) {
        return locationService.locationDetail(id);
    }
}
