---
title: Search Analytics & Geo-Location
sidebar_label: Search Analytics
sidebar_position: 8
---

# Search Analytics & Geo-Location

Understanding what your users are searching for is critical for collection development. The **Search Analytics** module (`view_search.php`) visualizes the search logs, providing insights into user behavior and geographical origin.

**Access:** **OPAC Configuration** > **Search Logs**

## 1. The Dashboard

The interface reads the log files stored in the system and presents them in an interactive dashboard.

### Log File Selection
The system automatically rotates logs by month.
* **Dropdown Menu:** Use the selector at the top to choose a specific period (e.g., `opac_2025-10.log`).
* **Default View:** By default, it loads the most recent log file available.

### Data Table
The main table displays the raw search data:
* **Date/Time:** The exact timestamp of the query.
* **IP Address:** The user's device address.
* **Location:** The city and country (resolved via GeoIP).
* **Search Term:** The keywords typed by the user.

## 2. Geo-Location and Map
The module integrates with **Leaflet.js** and external APIs to plot user locations on a map.

* **Mechanism:** The server extracts the IP address from the log and queries an external service (`ip-api.com`) to get the coordinates.
* **Visualization:** Pins are dropped on the map corresponding to the search origins. Clicking a pin reveals the IP and City.

:::info Internet Access Required
Since the GeoIP resolution uses an external API (`ip-api.com`), your server needs outbound internet access for this feature to work properly.
:::

## 3. Exporting Data
For deeper analysis or reporting, you can download the data.

* **Export to CSV:** Click the **"Exportar CSV"** button to download the current view.
* **Format:** The file is generated with UTF-8 BOM encoding, making it directly compatible with **Microsoft Excel** without character encoding issues.

## 4. Technical Details

### Log Storage
Logs are stored as plain text files in:
`bases/opac_conf/logs/`

**File Naming Convention:**
`opac_YYYY-MM.log` (e.g., `opac_2023-11.log`)

### Privacy & Data Retention
This module processes IP addresses. Ensure your library's privacy policy covers the collection of access logs.
* **Filtering:** The system tries to filter out internal system calls, but real user IPs are recorded.
* **Maintenance:** You may need to manually archive or delete old `.log` files from the server periodically to save space.