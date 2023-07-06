package dev.ayse.seyyah;

import dev.ayse.seyyah.model.SearchResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class LocationController {

    @Autowired
    LocationService locationService;
    @GetMapping("/search")
    public List<SearchResponseDTO> search(@RequestParam String searchQuery, @RequestParam String category) {
        return locationService.search(searchQuery,category);
    }
}
