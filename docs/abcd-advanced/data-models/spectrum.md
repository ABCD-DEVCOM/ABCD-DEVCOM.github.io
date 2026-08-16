---
id: abcd-spectrum-manual
title: ABCD-Spectrum Cataloging Manual
sidebar_label: Spectrum - Museum Management Standard
---

## Introduction

The present standardization of the ABCD-Spectrum database is based on two fundamental pillars: the international standard Spectrum - the [UK Museum Collections Management Standard (Collections Trust)](https://collectionstrust.org.uk/spectrum/), widely recognized and adopted by museum institutions in several countries, and the CHCM Museum Cataloging Manual, an internal document that consolidates the technical practice developed over the years at the [Mackenzie Historical and Cultural Center (CHCM)](http://memoria.mackenzie.br/).

Spectrum 5.1, published in September 2022 by the Collections Trust (United Kingdom), represents a continuous effort to review and improve documentary processes through the rethinking cataloguing initiative, which seeks to make cataloging more accessible, clear, and effective. Its principles directly guide the organization and development of the museum collection management practices at CHCM, serving as a methodological basis.

The [ABCD System (Library and Documentation Centers Automation)](https://abcd-community.org/), in turn, is a free, robust, and customizable solution for collection management. Originally aimed at libraries and documentation centers, the system has been adapted to meet the specificities of the museum collections of various institutions, bodies, or individuals, allowing the integration of Spectrum guidelines into the software's functional structure.

The construction of this database model, therefore, results from the articulation between the parameters established in Spectrum and the practical experience consolidated in the CHCM Museum Cataloging Manual. This standardization aims to guide teams in the standardized use of the database, ensuring the consistency of records, information traceability, and the preservation of memory.

## Who is it for?

Spectrum is for museums of any size and any type of collection, and can also be useful for similar institutions with museum-like collections. To keep things simple, we use "museum" to cover all collection-based organizations, and "you" to mean everyone involved in managing the collections under their care: from governing bodies that set policies and budgets to all levels of staff and volunteers, both front-of-house and behind the scenes.

## What is in a Spectrum procedure?

Each procedure has:
*   A definition that attempts to summarize the procedure in a single sentence.
*   A fuller note on the scope of the procedure, explaining when to use it (and sometimes when to use a different procedure).
*   The Spectrum standard. This is what you should aim to achieve, no matter how you do it. The standard has two parts:
    *   Some policy questions you will need to consider.
    *   The minimum requirements you must meet in your own museum's written procedure. An example or two suggests why each is important.
*   A suggested procedure (and it is only a suggestion) given in two formats:
    *   A workflow diagram summarizing the suggested way of doing things.
    *   A text version, which includes the information requirements for the procedure (see below). Where necessary, the text versions of the suggested procedures also include guidance notes.

The important thing to emphasize immediately is that there is no single way to put any of these procedures into practice. Whether your museum uses paper-based systems, a computerized collections management system, or — most likely — a mix of the two, you can adapt the suggested procedures to meet your needs. As long as your museum's way of doing things meets the minimum requirements of the Spectrum standard, your documentation should be fundamentally sound.

:::tip 
Interactive Workbench
Need to put these rules into practice? Access the [Cataloger's Workbench](/spectrum) to quickly explore FDT fields, translate pathologies, and use automated generators for Registry Numbers and Dimensions.
:::

## Procedures

Spectrum defines 21 essential procedures, but not all are mandatory for all museums. Below is a list of the main ones (mandatory + recommended), with suggested documentary workflows adapted to the ABCD Project.

### Table of Spectrum 5.1 Procedures and Priority Levels

| Nº | Procedure | Summary Description | Priority |
| :--- | :--- | :--- | :--- |
| 1 | Object Entry | Initial record of the entry of any item into the museum (temporary or under evaluation). | 🟢 Essential |
| 2 | Acquisition | Formalization of the acquisition of the object (donation, purchase, legacy, etc.). | 🟢 Essential |
| 3 | Inventory Control | Periodic verification of the physical existence of objects in the collection. | 🟢 Essential |
| 4 | Location and Movement Control | Tracking internal movements and location changes of objects. | 🟢 Essential |
| 5 | Cataloguing | Complete and standardized recording of object information in the database. | 🟢 Essential |
| 6 | Condition Checking and Technical Assessment | Evaluation of the object's state of conservation (routine, exhibitions, loans, etc.). | 🟢 Essential |
| 7 | Collections Care and Conservation | Preventive and corrective conservation actions for collection objects. | 🟡 Recommended |
| 8 | Object Exit | Control of objects leaving the museum (transport, external analysis, maintenance, etc.). | 🟢 Essential |
| 9 | Loans Out | Process of lending museum objects to third parties. | 🟡 Recommended |
| 10 | Loans In | Control of objects lent to the museum by third parties. | 🟡 Recommended |
| 11 | Transfer of Title | Formalization of the change of legal ownership of an object (donation, sale, etc.). | 🔵 Optional/Advanced |
| 12 | Object Exit for Disposal | Object exit for physical disposal, after formal decision. | 🔵 Optional/Advanced |
| 13 | Deaccessioning | Formal process of removing an object from the institutional collection. | 🟡 Recommended |
| 14 | Use of Collections | Record of uses: exhibitions, publications, events, teaching, etc. | 🟡 Recommended |
| 15 | Damage and Loss | Recording and tracking of losses or damage to collection objects. | 🟡 Recommended |
| 16 | Valuation Control | Recording and updating estimated values of objects (insurance, donations, etc.). | 🔵 Optional/Advanced |
| 17 | Insurance and Indemnity Management | Control of insurance policies and coverage applicable to objects. | 🔵 Optional/Advanced |
| 18 | Audit | Internal compliance checks between physical and digital records. | 🔵 Optional/Advanced |
| 19 | Rights Management | Recording of copyrights and usage/reproduction restrictions of objects. | 🟡 Recommended |
| 20 | Reproduction Management | Control over digital copies, photos, scans, and other types of reproduction. | 🔵 Optional/Advanced |
| 21 | Retrospective Cataloguing | Cataloging of objects already in the collection but not formally registered. | 🟡 Recommended |

**Priority Legend:**
*   **🟢 Essential** – High priority. Recommended for immediate implementation.
*   **🟡 Recommended** – Implement in the intermediate phase.
*   **🔵 Optional/Advanced** – Can be included in future phases, according to resources and needs.

---

## 0XX - Object Identification

### 002 - Registry Number (Accession Number)
The Registry Number is unique and sequential information aimed at classifying and identifying an item in a collection. It is understood as a mandatory description element and constitutes one of the main access points to the item.

It is suggested to use the following descriptors:
*   **Custodial Entity (mandatory):** Information designed to identify the institution that stores and preserves the museum item. By standard, this descriptor is accompanied by the code of the country where it is headquartered. This allows museums to exchange information about their collections in web ecosystems and identify their geographical location. For the country code, the use of ISO 3166 Codes for the representation of names of countries is recommended (e.g., US for the United States).
*   **Custodial entity subunit (optional):** If the institution has more than one physical address, it is necessary to register a specific code for each subunit that carries out storage and preservation. It is suggested to build a numerical representation expressing this condition.
*   **Museum Collection (mandatory):** Information designed to identify the collection grouping.

It is composed of levels of information:
*   **Custodial Entity** is the entity responsible for gathering the items. As a rule, the acronym of the country where the entity is allocated is used first. (e.g., `US_MUS`)
*   **Collection** is the indication of who gathered the items. (e.g., `ART`)
*   **Classification** is a grouping of typologies.
*   **Number** is the sequential identifier with seven digits and the addition of its typology.

**Example:** `US_MUS_ART_FURN_0000001_Furniture`

The following broad denominations are suggested for classification:
*   **Archaeological (AT)** – E.g.: artifacts found in excavations.
*   **Visual Arts (AV)** – E.g.: drawings, engravings, sculptures, and paintings with various themes.
*   **Equipment (EQ)** – E.g.: voltmeter, cameras, theodolites, and precision balances.
*   **Geology (GEO)** – E.g.: minerals and rocks.
*   **Heraldry (HE)** – E.g.: coats of arms.
*   **Clothing/Garments (VE)** – E.g.: gowns, sashes, hats, shirts, and uniforms.
*   **Furniture (MB)** – E.g.: cabinets and chairs.
*   **Numismatics (NM)** – E.g.: coins and medals.
*   **Object (OB)** – E.g.: dolls, test tubes, and generic objects used in classes or created for a commemorative date.
*   **Awards (PR)** – E.g.: trophies, diplomas, plaques, as long as they are not merely commemorative.
*   **Vexillology (VX)** – E.g.: flags and pennants.

In the case of sets, a new sequential number will be added to identify the items that compose it:
*   *Ex.: A precision balance with 5 weights.
    *   The set: `US_MUS_ART_EQ_0000001_Tool`
    *   The balance: `US_MUS_ART_EQ_0000001_Tool_1`
    *   Weight 1: `US_MUS_ART_EQ_0000001_Tool_2`
    *   Weight 2: `US_MUS_ART_EQ_0000001_Tool_3`
    *   Weight 3: `US_MUS_ART_EQ_0000001_Tool_4`
    *   Weight 4: `US_MUS_ART_EQ_0000001_Tool_5`
    *   Weight 5: `US_MUS_ART_EQ_0000001_Tool_6`
    *   Packaging/Box: `US_MUS_ART_EQ_0000001_Tool_7` (only if original to the piece; if not, just describe it in the "physical description" field)

*Note: Constantly updated, as it is linked to the acquired collection.

### 020 - Classification (Object Category)
Used to insert the taxonomic classification.

### 050 - Title / Denomination
The title of the object must be transcribed in this field, according to the information collected from it. When it is not possible to find the denomination, the field can be filled with a title assigned by the person responsible for the registration, in brackets, in order to facilitate its identification.

The denomination of objects and furniture follows synthetic criteria and makes no value judgments. Sets follow the same denomination criteria as individual objects, and when composed of only two identical pieces they will receive the denomination "pair" and larger groupings "set". Pennants, Trophies, Medals, and Coins have specific denominations referring to the producing body and the event, respectively.

Therefore, for this field, there are the following types of insertion to consider:

**OBJECTS IN GENERAL:**
Transcribe the main title, especially considering visual arts, whose author may have assigned a title. In other objects, this information may be contained in the packaging boxes.
*   *Ex 1:* Boats in the Marina
*   *Ex 2:* Microfilming lenses

Assign a title: if the object does not have a specific denomination, a generic but universally known denomination can be assigned. Place this type of title in brackets. For visual arts, pennants, trophies, and medals, make the mention "Untitled" and then, separated by a semicolon, add the assigned title, in brackets.
*   *Ex 1:* Large scale [Precision Balance]
*   *Ex 2:* Chemistry glass [Pipette]
*   *Ex 3:* Untitled; [Shipyard]
*   *Ex 4:* [Pair of Armchairs]
*   *Ex 5:* [Table and Chairs Set]

**PENNANTS / SASHES:**
Transcribe the main title, considering only the producing body. If this information does not exist, or if it is an event with shared production, use the name of the event. ALWAYS use the word "Pennant" or "Sash" in the denomination and AVOID using abbreviations, even when they are on the object. Research the information for the meaning of the abbreviated text.
*   *Ex 1:* Student Union 2020 [Student Union Banner]
*   *Ex 2:* 3rd Annual Tournament
*   *Ex 3:* Class of 2015 Law School, [Law School Banner]
*   *Ex 4:* The Museum [Museum Banner]

**TROPHIES / MEDALS / COINS:**
Transcribe the main title, considering only the competition/event. If this information does not exist, due to loss of information on the identification plate, assign an "Untitled" denomination. ALWAYS use the word "Trophy", "Medal", or "Coin" in the denomination and AVOID using abbreviations.
*   *Ex 1:* State Cup Trophy; [State Football Championship Trophy]
*   *Ex 2:* Regional Tournament Trophy
*   *Ex 3:* Science Fair Medal
*   *Ex 4:* 50th Anniversary Commemorative Coin

### 060 - Typology (Object Name)
The typology is the description based on the utilitarian function of the piece. This field contains controlled vocabulary elaborated according to the pieces that make up the collection. 
*(Examples include: Accessory, Artifact, Banners, Coat of Arms, Drawing, Architectural Element, Sculpture, Tool, Engraving, Clothing, Musical Instrument, Furniture, Mold, Ceremonial Object, Decorative Object, Painting, Plaque, Trophy).

---

## 1XX - Object Description

The object description area is intended to collect information analyzing the object's functionalities and descriptive physical characteristics, disregarding any value judgment about the object.

### 110 - Analytical Description
This field is intended for the analytical description of the object, that is, what it is used for.
*   *Ex 1:* Used for sitting.
*   *Ex 2:* Used for storing test tubes.
*   *Ex 3:* Used in formal, commemorative, and ceremonial events.

### 120 - Physical Description
This field is intended for the objective description of the physical form of the object and its support. Report the theme, what is represented, its colors and shapes, structure, and decorative elements, if any. Describe visual aspects without value or taste judgments. Do not transcribe texts in this field.
The direction adopted for description should prioritize the object's content: from the general to the particular, from the foreground to the background. If the object is part of a set, describe it piece by piece.
*   *Ex 1:* Artwork: Pairs of wooden chairs with wooden strip backs, woven cane seats, straight legs, and front feet with a square base.
*   *Ex 2:* Artwork: Rectangular wooden base supports metal sewing machinery. It has a concave span.
*   *Ex 3:* Artwork: Cylindrical, hollow vessel that tapers at the top, handle and spout at opposite ends.

**IMPORTANT:** The physical description of technical equipment can be done as a whole; it is not necessary to do it piece by piece.

---

## 2XX - Physical Characteristics

### 200 - Material of the Work
Field intended for inserting data on constituent materials of the piece that can be visually identified, with generic terms and starting from the predominant material to the one that appears least, if such distinction is possible. Can describe more than one type of material.
*   *Ex 1:* Oil paint, canvas
*   *Ex 2:* Mineral, metal
*   *Ex 3:* Paper

### 210 - Support Material
This field is intended for inserting data on constituent materials of the support of the piece, starting from the predominant material.
*   *Ex 1:* Wood, metal

### 220 - Technique
The technique is the method adopted to build or compose something. Detailing often requires specialized analysis. Choose the predominant technique. This field uses controlled vocabulary.
*(Examples: High relief, Bas-relief, Calligraphy, Carpentry, Collage, Drawing, Carving, Sculpture, Forging, Engraving, Printing, Woodworking, Modeling, Pottery, Painting, Textile, Glasswork).

### 230 - Dimensions of the Work
Objects must be measured at their extremities, individually, without considering the support and always in centimeters (cm), respecting the order:
*   HEIGHT x WIDTH;
*   HEIGHT x WIDTH x DEPTH;
*   HEIGHT x DIAMETER;
*   DIAMETER.

Correct typing for this field is done with a lowercase "x" (e.g., number [space] x [space] number).
*   *Ex 1:* 200 x 30 x 500
*   *Ex 2:* Open: 50 x 20 x 70 / Closed: 102 x 20 x 75

:::info Automate this field
You can automatically format the subfields (`^a`, `^b`, `^c`, `^d`) without syntax errors using the Dimension Formatter tool in our [Interactive Workbench](/spectrum#sec-ferramentas).
:::

### 240 - Mount/Support Dimensions
Objects must be measured considering the support, such as picture frames. Measurement must be individual, always in centimeters (cm).
**IMPORTANT:** The dimensions of technical equipment must be individualized and linked to the inventory numbers corresponding to the piece/part.
*   *Ex:* MUS_EQ_00005_2: 25 x 50 x 30

### 250 - Weight
Whenever possible, indicate the weight of the piece, using grams (g) as the unit of measurement. Not mandatory.

---

## 3XX - Creator and Production

### 300 - Author / Artist
Mandatory field, identify the authorship of the object here. If there is more than one, describe only one here and the others in General Comments. Format: `Author – Last Name, First Name`. When not found, use "Unknown".

### 310 - Manufacturer
Mandatory field, identify the manufacturer of the object here. Format: Full name of the manufacturer or factory.

### 320 - Author / Manufacturer Biography or History
Insert a brief biography about the author, containing dates of birth and death, place of birth, professional history, among other relevant information. The same applies to the manufacturer's history (foundation year, production locations). If "Unknown", state "Not located".

### 330 - Period of Creation
Inform the date according to information contained in the work and/or caption.
*   **Full date:** DD/MM/YYYY
*   **Decade period:** When there is no certainty, use *circa* (ca.). E.g., `ca. 1935` refers to the decade from 1930 to 1940.
*   **Known period:** YYYY-YYYY. E.g., `1970-1973`.
*   **No date:** n.d. (or s/d).
*   **Known century:** E.g., 19th c.
*   **Illegible:** Make the mention `[illegible]`.

### 340 - Form of making or production
Inform if the object was produced by manual labor (artisanal), mass-produced (industrial), or part manual and part industrial (manufactured).
*   *Ex 1:* Microfilming lenses – industrial
*   *Ex 2:* Cuckoo Clock – manufactured
**IMPORTANT:** Drawings, engravings, paintings, sculptures (Visual Arts) are not considered artisanal; use the option "Artistic".

---

## 4XX - Provenance and Acquisition

### 400 - Provenance
Indicate the first owner or place of origin and the last owner of the object (donor, seller, etc.). For trophies and pennants, this field will contain City / State / Country of origin.

### 410 - Date of Acquisition
Filled with the date of incorporation into the collection, following the DD/MM/YYYY format.

### 420 - Acquisition Cost
Recorded if applicable.

### 430 - Method of Entry
Identifies the possible forms of incorporation. Controlled vocabulary:
*   **Field Collection/Gathering:** Documents collected over time or via Research Programs.
*   **Commodatum / Long-term Loan:** Provisional transfer, generally over a year.
*   **Purchase:** Property acquired through payment.
*   **Deposit:** Receiving an object to keep until reclaimed.
*   **Donation:** Free transfer of possession and ownership.
*   **Legacy:** Property received through a will.

---

## 5XX - Condition and Conservation

### 500 - Condition
Mandatory field with controlled vocabulary to indicate the state of conservation:
*   **Good:** Physical integrity has no problems, even if requiring minor interventions.
*   **Fair / Regular:** Presents conservation problems, but physical integrity is not compromised.
*   **Poor:** Conservation problems with compromised physical integrity, partially or completely.

### 510 - Date of Assessment
Date the technician is evaluating the collection (DD/MM/YYYY).

### 520 - Access Conditions
Options like: Limited; Restricted.

### 530 - Description of the Incident / Damage
Describe what is observed on the piece regarding its state of conservation (pathology, visible damage, weathering). Consult the Pathologies glossary.
*   *Ex 1:* Structural loss, craquelure, abrasion, scratch, previous notation removed.
*   *Ex 2:* Collection presents craquelure over the entire surface, generalized stains, and active biological attack on the opposite side.

### 540 - Recommendation
This field is automated and linked to the "Condition" field.
*   Good - remains blank.
*   Fair / Regular - "Greater attention to Conservation procedures is required".
*   Poor - "Restoration is Recommended".

### 550 - Priority
Indicate the priority of treatment. Fill in "Yes" for cases where there is urgency (e.g., Poor condition) and "No" if there is no urgency.

### 560 - Previous Intervention
Indicate if there are signs of previous intervention/restoration.
*   *Ex:* Collection has adhesive tape on the tears.

---

## 6XX - Sets and Parts

### 610 - Is it a Set? / Name of the Set
Indicate whether the cataloged item is a set (Yes or No). Indicate the name of the collection or set.

### 620 - Number of Pieces
Indicate the quantity of pieces that make up the set. Each piece must be numbered sequentially in association with the general inventory number.
*   *Ex 1:* Precision balance with 5 weights, the set has 7 pieces (the balance, the 5 weights, and the box).

### 630 - Number of Parts
Informs the quantity of items that are not fixed to the object, but compose it. They have no function without the main object and should not receive numbering.
*   *Ex 2:* A dresser with 6 drawers. It has 7 parts: furniture + 6 drawers.

---

## 7XX - Inscriptions

Inscription refers to any textual reference contained in the work and/or its frame - handwritten, stamped, labeled, printed, watermark, plaque, etc.

### 700 - Has Inscription
Indicate if the piece has any type of inscription: Yes or No. Do not transcribe instructions for use.

### 710 - Quantity of Inscriptions
Indicate the total count of inscriptions.

### 720 - Inscriptions (Group)
*   **Subfield ^a - Type:** Indicate, separated by a semicolon, all types of inscriptions (Handwritten, watermark, stamp, seal, label, plaque, logo, print).
*   **Subfield ^b - Location:** Indicate the location using standard acronyms. (e.g., front, back, top, bottom, left, right, center, frame, base, internal).
*   **Subfield ^l - Language:** Inform the languages detected. If only numbers, consider the local language.
*   **Subfield ^t - Transcript/Content:** Transcription must be exact, enclosed in quotation marks, separated by semicolons.
    *   *Ex:* "Smith Furniture Co., Main Street, NY". Use `[illegible]` when necessary.

### 760 - Observation regarding the inscription
Contains relevant information, such as previous notations that were removed.

---

## 8XX - Management and Location Control

### 800 - Current Physical Location
Indicate the physical location according to vocabulary (e.g., Room / Rack / Shelf / Box).

### 810 - Movement History
Keep all previous locations of the object with date, reason, and responsible person.

### 820 - Number of digital representatives
Each piece will contain at least six record images (except 2D items). Files must be renamed according to the reference code.

### 830 - Object History
History of use and context, purpose, exhibitions, and provenance details.
*   *Ex:* "Item exhibited in the 'History of the Museum' exhibition from 10/31/2015 to 03/20/2016."

### 840 - Research Source
Bibliographic and archival sources used.

### 870 - General Comments
Relevant information not covered in other fields.

---

## 9XX - Rights Management

### 900 - Rights Holder
Describe who holds the copyright or usage rights.

### 910 - Type of Right
Copyright, patrimonial, moral, image, etc.

### 920 - Rights Status
Free, restricted, in the public domain, etc.

### 930 - License Type
Creative Commons, internal use, etc.

### 940 - Expiry Date
Date when the right expires (DD/MM/YYYY).

### 950 - Source of Information
Document proving the transfer of rights (Contract, declaration, etc.).

### 960 - Notes on Rights
Additional observations.

---

## Pathologies Glossary (Common Conservation Issues)

*Note: The object may contain other problems not listed below.

*   **Abrasion:** Wear of the surface caused by scraping, friction, or rubbing.
*   **Biological Attack:** Active or inactive presence of insects, feces, bacteria, or mold.
*   **Carbonization (Burning):** Deposition of partially burned material, usually resulting from candles, tobacco, or fires.
*   **Craquelure:** Set of small and numerous cracks in the varnish or painting.
*   **Support Deformation:** Planar deformation of the support caused by humidity changes.
*   **Discoloration:** Partial or total alteration in color caused by aging, light, and/or chemical agents.
*   **Flaking/Detachment of Pictorial Layer:** Separation of the paint layer from the canvas or support.
*   **Separation/Disunion:** Partial or total separation of a joint between two parts of an object.
*   **Fills/Grafts:** Material used to replace areas of loss during restoration.
*   **Run Marks / Dripping:** Marks of dripped liquid, caused by glue, water, solvent, etc.
*   **Impact:** Circular radiating cracks caused by a fall or blow.
*   **Chip:** Loss of a small amount of material from the object.
*   **Generalized Stains:** Color change resulting from dirt, adhesives, pests, fungi, food, oils, etc.
*   **Adhered Material:** External material that does not originally belong to the object (labels, glue residue).
*   **Dent:** Small defect on the surface caused by a blow, characterized by a simple concavity.
*   **Oxidation:** Result of the reaction of metal alloys with oxygen (e.g., rust, tarnish).
*   **Hole (non-penetrating):** Circular opening in the support that does not go all the way through.
*   **Structural Loss:** Significant loss of the object's structure, missing parts.
*   **Pictorial Loss:** Loss of part of the paint layer.
*   **Puncture (penetrating):** Opening that goes completely through the object or support.
*   **Crack:** Superficial or wide lines in the support or varnish, causing rupture by contraction/dilation.
*   **Tear:** Rupture in paper, fabric, or other material, resulting from tension or twisting.
*   **Drying/Embrittlement:** Loss of flexibility, which can cause breaking or disintegration when folded.
*   **Scratches:** Marking of the surface made with a sharp object.
*   **Rupture/Fracture:** Fracture of the object or its support without causing structural loss.
*   **Dirt/Grime:** General term denoting any type of dirt (dust, soot, splashes).
*   **Defective Joint:** Incorrect joining of parts of a broken object.
*   **Creases:** Folds or signs of folds in the object.