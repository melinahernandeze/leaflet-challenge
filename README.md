# leaflet-challenge

# USGS Earthquake Visualization

## Background

The United States Geological Survey (USGS) is responsible for providing scientific data about natural hazards, ecosystem health, climate change, and land-use impacts. They collect a vast amount of earthquake data worldwide each day but lack a meaningful way to visualize it. This project aims to develop tools to visualize USGS earthquake data effectively for public education and government organizations.

## Before You Begin

- **Repository**: Create a new repository named `leaflet-challenge` for this project.
- **Local Setup**: Clone the repository to your local machine.
- **Project Structure**: Inside the repository, create directories named `Leaflet-Part-1` and `Leaflet-Part-2`.

## Files

Download the following files to help you get started:
- [Module 15 Challenge files](#) 

## Instructions

This project is divided into two parts:

### Part 1: Create the Earthquake Visualization

**Goal**: Visualize earthquake data provided by USGS.

1. **Get Your Dataset**: Visit the [USGS GeoJSON Feed](#) page and choose a dataset to visualize.

2. **Import and Visualize the Data**:
   - Use Leaflet to create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
   - Make data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
   - Include popups that provide additional information about the earthquake when its associated marker is clicked.
   - Create a legend to provide context for your map data.

### Part 2: Gather and Plot More Data (Optional)

**Goal**: Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity.

1. **Plot Tectonic Plates Dataset**:
   - Pull in the tectonic plates dataset from [here](https://github.com/fraxen/tectonicplates).
   - Visualize the tectonic plates dataset alongside the earthquake data.
   - Add other base maps to choose from.
   - Put each dataset into separate overlays that can be turned on and off independently.
   - Add layer controls to your map.

## Requirements

These requirements apply only to "Part 1: Create the Earthquake Visualization" as "Part 2" is optional with no extra points earning.

### Map (60 points)

- **TileLayer**: Loads without error (20 points)
- **Connects to GeoJSON API**: Using D3 without error (20 points)
- **Markers**: Size corresponding to earthquake magnitude (10 points)
- **Legend**: Showing the depth and their corresponding color (10 points)

### Data Points (40 points)

- **Scale with Magnitude Level**: Data points scale with magnitude level (10 points)
- **Color Change with Depth Level**: Data points colors change with depth level (10 points)
- **Tooltip**: Each point has a tooltip with the Magnitude, the location, and depth (10 points)
- **Correct Locations**: All data points load in the correct locations (10 points)

