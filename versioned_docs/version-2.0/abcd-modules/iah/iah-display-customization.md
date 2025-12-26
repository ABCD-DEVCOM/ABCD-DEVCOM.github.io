---
sidebar_position: 2
title: iAH - Display Customization
---

# iAH: Display Customization

Similar to the standard OPAC, the way search results and individual records are presented in the iAH interface is entirely controlled by the **ISIS Formatting Language (PFT)**. This gives administrators granular control over the layout, fields, and formatting of the information displayed to the user, allowing for a rich and intuitive user experience.

### PFTs for Different Display Contexts

The iAH interface uses a set of PFT files to define how records are displayed in different contexts:

* **Short Display:** A concise, single-line format used in the list of search results.
* **Full Display:** The detailed view of a single record, showing all relevant bibliographic information when a user selects an item.
* **Other Formats:** iAH may also use specific PFTs for other features, like generating citation formats or exporting records.

### How to Customize iAH Display Formats

The customization process involves editing the specific PFT files associated with the iAH interface for each database.

1.  **Locate the PFTs:** These files are typically found within the `pfts` directory of the database being configured, often in a language-specific subdirectory (e.g., `/var/opt/ABCD/bases/your_db/pfts/en/`). The files used by iAH will have specific names, which can be identified in the iAH configuration files.
2.  **Edit the PFT file:** Open the relevant PFT file in a text editor to modify its content.

**PFT Example for a Full Display:**

You can design the HTML structure and include the desired fields. For instance, to display the title, author, and subject:

```pft
<div class="record">
    <h2>v245^a, ':', v245^b</h2>
    <p><strong>Author:</strong> v100^a</p>
    <p><strong>Subjects:</strong></p>
    <ul>
        (if p(v650) then '<li>'v650'</li>' fi/)
    </ul>
</div>
```

* This example creates a `div` for the record.
* It displays the title (field 245, subfields a and b) in an `<h2>` heading.
* It shows the author (field 100, subfield a) with a bold label.
* The `(if p(v650) then ... fi/)` structure creates a repeating block that lists all occurrences of the subject field (650) as items in an unordered list `(<ul>)`.

This level of control allows for the creation of sophisticated and well-structured record displays that can include links, images, and other dynamic content, fully leveraging the advanced capabilities of the iAH interface.