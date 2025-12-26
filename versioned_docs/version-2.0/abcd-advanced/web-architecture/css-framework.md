---
id: css-framework
title: ABCD Design System & UI Kit
sidebar_label: UI Kit & CSS
---

{/* Carrega FontAwesome para renderizar os ícones na documentação */}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

export const ColorSwatch = ({color, name, variable, text = "white"}) => (
  <div style={{
    backgroundColor: color,
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    color: text,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid #e5e7eb',
    minHeight: '120px'
  }}>
    <span style={{fontWeight: 'bold', fontSize: '1.1em'}}>{name}</span>
    <div style={{marginTop: 'auto'}}>
      <code style={{backgroundColor: 'rgba(255,255,255,0.3)', color: text, padding: '2px 6px', borderRadius: '4px', border: 'none'}}>{variable}</code>
      <br/>
      <span style={{fontSize: '0.8em', opacity: 0.9}}>{color}</span>
    </div>
  </div>
);

export const ButtonPreview = ({className, style, children}) => (
  <button style={{
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    borderRadius: '0.25rem',
    cursor: 'pointer',
    border: '1px solid transparent',
    marginRight: '10px',
    marginBottom: '10px',
    transition: 'opacity 0.2s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    ...style
  }}>
    {children}
  </button>
);

# ABCD Design System & UI Kit

## System Overview

The **ABCD Design System** provides a modular architecture for building consistent interfaces for library automation. This system relies on a set of styles that must be loaded in a specific order to ensure the correct CSS cascade.

### Loading Architecture

To ensure components render correctly in the Central module or the Site (OPAC), CSS files must be loaded in the following priority order:

1.  **normalize.css**: Resets browser styles to ensure consistency.
2.  **main.css**: Defines global typography and base elements.
3.  **colors.css**: Defines color variables and utility classes.
4.  **buttons.css**: Styling for interactive elements.
5.  **spaces.css**: Provides a robust set of utility classes to manage margin, padding, and element width directly in the HTML.
5.  **Specific Sheets**: (e.g., `dhtmlXGrid.css`, `progressbar.css`, `leaflet.css`).

---

## Color Palette

The system uses a set of CSS variables to maintain visual consistency. Below are the core colors defined in `colors.css`.
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
  <ColorSwatch color="#0066FF" name="Primary" variable="--abcd-primary" />
  <ColorSwatch color="#198754" name="Success" variable="--abcd-success" />
  <ColorSwatch color="#00CCFF" name="Info" variable="--abcd-info" text="#333" />
  <ColorSwatch color="#FFCC00" name="Warning" variable="--abcd-warning" text="#333" />
  <ColorSwatch color="#CC3333" name="Danger" variable="--abcd-danger" />
  <ColorSwatch color="#212529" name="Dark" variable="--abcd-dark" />
  <ColorSwatch color="#F8F8F8" name="Light" variable="--abcd-light" text="#333" border={true} />
</div>

### Base Palette
A wide range of colors available for custom elements or badges.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
  <ColorSwatch color="#4682b4" name="Steel Blue" variable="--abcd-steel-blue" />
  <ColorSwatch color="#0066FF" name="Blue" variable="--abcd-blue" />
  <ColorSwatch color="#6600FF" name="Indigo" variable="--abcd-indigo" />
  <ColorSwatch color="#6633CC" name="Purple" variable="--abcd-purple" />
  <ColorSwatch color="#CC3399" name="Pink" variable="--abcd-pink" />
  <ColorSwatch color="#CC3333" name="Red" variable="--abcd-red" />
  <ColorSwatch color="#FF6600" name="Orange" variable="--abcd-orange" />
  <ColorSwatch color="#FFCC00" name="Yellow" variable="--abcd-yellow" text="#333" />
  <ColorSwatch color="#009966" name="Green" variable="--abcd-green" />
  <ColorSwatch color="#33CC99" name="Teal" variable="--abcd-teal" text="#333" />
  <ColorSwatch color="#00CCFF" name="Cyan" variable="--abcd-cyan" text="#333" />
</div>

### Gray Scale
Used for borders, backgrounds, and text.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
  <ColorSwatch color="#ffffff" name="White" variable="--abcd-white" text="#333" border={true} />
  <ColorSwatch color="#F8F8F8" name="Gray 100" variable="--abcd-gray-100" text="#333" border={true} />
  <ColorSwatch color="#DCDCDC" name="Gray 200" variable="--abcd-gray-200" text="#333" />
  <ColorSwatch color="#D3D3D3" name="Gray 300" variable="--abcd-gray-300" text="#333" />
  <ColorSwatch color="#C8C8C8" name="Gray 400" variable="--abcd-gray-400" text="#333" />
  <ColorSwatch color="#BEBEBE" name="Gray 500" variable="--abcd-gray-500" text="#333" />
  <ColorSwatch color="#A0A0A0" name="Gray 600" variable="--abcd-gray-600" />
  <ColorSwatch color="#666666" name="Gray (Base)" variable="--abcd-gray" />
  <ColorSwatch color="#495057" name="Gray 700" variable="--abcd-gray-700" />
  <ColorSwatch color="#333333" name="Gray 800" variable="--abcd-gray-800" />
  <ColorSwatch color="#212529" name="Gray 900" variable="--abcd-gray-900" />
</div>

### Contextual Text Utilities

Use these classes to apply semantic colors to text:

<div style={{backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
  <p style={{color: '#0066FF', fontWeight: 'bold', margin: '0.5rem 0'}}>.color-primary - Used for links and main titles.</p>
  <p style={{color: '#198754', fontWeight: 'bold', margin: '0.5rem 0'}}>.color-success - Used for confirmation messages.</p>
  <p style={{color: '#CC3333', fontWeight: 'bold', margin: '0.5rem 0'}}>.color-danger - Used for critical errors.</p>
  <p style={{color: '#666666', margin: '0.5rem 0'}}>.color-gray - Used for secondary captions.</p>
</div>

---

## Buttons & Interactivity

Buttons in ABCD are defined by the `buttons.css` file. The base class is `.btn`, which should be combined with variant and size modifiers.

### Style Variants

<div style={{padding: '20px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px'}}>
  <ButtonPreview style={{backgroundColor: '#006699', color: 'white'}}>Primary</ButtonPreview>
  <ButtonPreview style={{backgroundColor: '#666666', color: 'white'}}>Secondary</ButtonPreview>
  <ButtonPreview style={{backgroundColor: '#28a745', color: 'white'}}>Success</ButtonPreview>
  <ButtonPreview style={{backgroundColor: '#dc3545', color: 'white'}}>Danger</ButtonPreview>
</div>


```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
```


### Buttons with Icons (FontAwesome)

ABCD heavily uses icons. Ensure **FontAwesome** is loaded in your header.

<div style={{padding: '20px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px'}}>
<ButtonPreview style={{backgroundColor: '#006699', color: 'white'}}>
<i className="fa fa-save"></i> Save Record
</ButtonPreview>
<ButtonPreview style={{backgroundColor: '#dc3545', color: 'white'}}>
<i className="fa fa-trash"></i> Delete
</ButtonPreview>
<ButtonPreview style={{backgroundColor: '#17a2b8', color: 'white'}}>
<i className="fa fa-search"></i> Search
</ButtonPreview>
<ButtonPreview style={{backgroundColor: '#f8f9fa', color: '#333', border: '1px solid #ccc'}}>
<i className="fa fa-print"></i> Print
</ButtonPreview>
</div>

```html
<button class="btn btn-primary">
    <i class="fa fa-save"></i> Save Record
</button>

<button class="btn btn-danger">
    <i class="fa fa-trash"></i> Delete
</button>
```

### Sizes

<div style={{padding: '20px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
<ButtonPreview style={{backgroundColor: '#006699', color: 'white', padding: '0.25rem 0.5rem', fontSize: '0.875rem'}}>Small (.btn-sm)</ButtonPreview>
<ButtonPreview style={{backgroundColor: '#006699', color: 'white'}}>Default</ButtonPreview>
<ButtonPreview style={{backgroundColor: '#006699', color: 'white', padding: '0.5rem 1rem', fontSize: '1.25rem'}}>Large (.btn-lg)</ButtonPreview>
</div>

```html
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-lg btn-primary">Large</button>
```

-----

### Grid System

The ABCD layout is built on a flexible **12-column grid system** defined in `columns.css`. This allows developers to create complex layouts by dividing the available width into 12 distinct units.

The logic is simple: **The sum of the column classes in a row should always equal 12.**

#### Basic Structure

  * **.row**: The wrapper container that creates a horizontal group of columns. It handles clearing floats or setting up the flex container.
  * **.col-[1-12]**: The element that holds the content. The number represents how many "units" of the 12 available it spans.

#### Visual Examples

Below are interactive visualizations of common layouts used in ABCD.

**1. Equal Columns (50% / 50%)**
Useful for login screens or split dashboards.

<div style={{display: 'flex', gap: '4px', marginBottom: '10px', textAlign: 'center', color: 'white', fontFamily: 'monospace'}}>
<div style={{width: '50%', backgroundColor: '#006699', padding: '15px 0', borderRadius: '4px'}}>.col-6</div>
<div style={{width: '50%', backgroundColor: '#006699', padding: '15px 0', borderRadius: '4px'}}>.col-6</div>
</div>

```html
<div class="row">
    <div class="col-6">Left Content</div>
    <div class="col-6">Right Content</div>
</div>
```

**2. Sidebar Layout (25% / 75%)**
Standard layout for the Central Module (menus on the left, workspace on the right).

<div style={{display: 'flex', gap: '4px', marginBottom: '10px', textAlign: 'center', color: 'white', fontFamily: 'monospace'}}>
<div style={{width: '25%', backgroundColor: '#17a2b8', padding: '15px 0', borderRadius: '4px'}}>.col-3</div>
<div style={{width: '75%', backgroundColor: '#006699', padding: '15px 0', borderRadius: '4px'}}>.col-9</div>
</div>

```html
<div class="row">
    <div class="col-3">Sidebar Menu</div>
    <div class="col-9">Main Workspace</div>
</div>
```

**3. Three Columns (33.3% each)**
Often used in the OPAC footer or dashboard statistics.

<div style={{display: 'flex', gap: '4px', marginBottom: '10px', textAlign: 'center', color: 'white', fontFamily: 'monospace'}}>
<div style={{width: '33.33%', backgroundColor: '#28a745', padding: '15px 0', borderRadius: '4px'}}>.col-4</div>
<div style={{width: '33.33%', backgroundColor: '#28a745', padding: '15px 0', borderRadius: '4px'}}>.col-4</div>
<div style={{width: '33.33%', backgroundColor: '#28a745', padding: '15px 0', borderRadius: '4px'}}>.col-4</div>
</div>

```html
<div class="row">
    <div class="col-4">Stat 1</div>
    <div class="col-4">Stat 2</div>
    <div class="col-4">Stat 3</div>
</div>
```

**4. Granular Control (Mixed Sizes)**
You can mix any combination as long as it sums to 12.

<div style={{display: 'flex', gap: '4px', marginBottom: '10px', textAlign: 'center', color: 'white', fontFamily: 'monospace'}}>
<div style={{width: '16.66%', backgroundColor: '#666', padding: '15px 0', borderRadius: '4px'}}>.col-2</div>
<div style={{width: '66.66%', backgroundColor: '#006699', padding: '15px 0', borderRadius: '4px'}}>.col-8</div>
<div style={{width: '16.66%', backgroundColor: '#666', padding: '15px 0', borderRadius: '4px'}}>.col-2</div>
</div>

```html
<div class="row">
    <div class="col-2">Icon</div>
    <div class="col-8">Description Text</div>
    <div class="col-2">Actions</div>
</div>
```

#### Technical Implementation Details

Based on `columns.css`, the system applies the following rules:

1.  **Box Sizing:** Elements are set to `box-sizing: border-box`, meaning padding and borders are included in the width calculation.
2.  **Gutters:** Columns typically have a small padding (e.g., `padding-left: 15px; padding-right: 15px;`) to prevent content from touching.
3.  **Float/Flex:** Depending on your specific ABCD version, `columns.css` uses `float: left` (legacy) or `flex: 0 0 auto` (modern). Always ensure your `.row` container properly clears floats or initiates the flex context.

:::tip Responsive Design
In newer versions of the ABCD Site (OPAC), these columns may stack vertically on mobile devices (width becomes 100%) automatically.
:::

-----

### Spacing & Sizing Utilities

The `spaces.css` file provides a robust set of utility classes to manage margin, padding, and element width directly in the HTML.

#### Spacing Notation

The classes follow the format `{property}{sides}-{size}`.

| Key | Represents | Description |
| :--- | :--- | :--- |
| **Property** | `m` | **Margin** (outer spacing) |
| | `p` | **Padding** (inner spacing) |
| **Sides** | `t`, `b` | Top, Bottom |
| | `s`, `e` | Start (Left), End (Right) |
| | `x`, `y` | Horizontal (Left+Right), Vertical (Top+Bottom) |
| | *(blank)* | All 4 sides |
| **Size** | `0` - `5` | From 0 to 3rem |
| | `auto` | Automatically calculated (margins only) |

#### Spacing Scale

Visual representation of the padding levels available:

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem'}}>
{[0, 1, 2, 3, 4, 5].map(size => (
<div key={size} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div style={{
width: '4rem',
height: '4rem',
backgroundColor: '#e9ecef',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
border: '1px solid #dee2e6',
position: 'relative'
}}>
<div style={{
width: '100%',
height: '100%',
padding: size === 0 ? '0' : (size === 1 ? '0.25rem' : (size === 2 ? '0.5rem' : (size === 3 ? '1rem' : (size === 4 ? '1.5rem' : '3rem')))),
backgroundColor: 'rgba(0, 102, 153, 0.2)',
backgroundClip: 'content-box'
}}>
<div style={{width:'100%', height:'100%', backgroundColor: 'rgba(0, 102, 153, 0.3)', border: '1px dashed #006699'}}></div>
</div>
</div>
<code style={{marginTop: '0.5rem', fontSize: '0.8rem'}}>.p-{size}</code>
</div>
))}
</div>

**Common Use Cases:**

  * **Centering:** Use `.mx-auto` combined with a defined width to center blocks horizontally.
  * **Separation:** Use `.mb-3` (margin-bottom) to separate form elements or paragraphs.
  * **Gutters:** Use `.px-3` to add horizontal cushion inside containers.

<!-- end list -->

```html
<div class="p-4 mb-4 bg-light border">
    <h3 class="m-0 text-primary">Card Title</h3>
</div>
```

-----

#### Width Utilities

Unlike standard libraries that use 25/50/75/100, ABCD uses a **decile system** (10% increments) defined in `spaces.css`.

<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', marginBottom: '1.5rem', border: '1px solid #eee', padding: '1rem'}}>
<div style={{width: '100%', backgroundColor: '#f1f3f5', borderRadius: '4px'}}>
<div style={{width: '10%', backgroundColor: '#666', color: 'white', fontSize: '0.70rem', textAlign: 'center', padding: '2px 0', borderRadius: '4px', whiteSpace: 'nowrap', overflow: 'hidden'}}>.w-1</div>
</div>
<div style={{width: '100%', backgroundColor: '#f1f3f5', borderRadius: '4px'}}>
<div style={{width: '30%', backgroundColor: '#17a2b8', color: 'white', fontSize: '0.70rem', textAlign: 'center', padding: '2px 0', borderRadius: '4px'}}>.w-3 (30%)</div>
</div>
<div style={{width: '100%', backgroundColor: '#f1f3f5', borderRadius: '4px'}}>
<div style={{width: '50%', backgroundColor: '#006699', color: 'white', fontSize: '0.70rem', textAlign: 'center', padding: '2px 0', borderRadius: '4px'}}>.w-5 (50%)</div>
</div>
<div style={{width: '100%', backgroundColor: '#f1f3f5', borderRadius: '4px'}}>
<div style={{width: '100%', backgroundColor: '#28a745', color: 'white', fontSize: '0.70rem', textAlign: 'center', padding: '2px 0', borderRadius: '4px'}}>.w-10 (100%)</div>
</div>
</div>

```html
<input type="text" class="w-10" placeholder="Enter full search...">

<div class="d-flex">
    <div class="w-3">Sidebar (30%)</div>
    <div class="w-7">Main (70%)</div>
</div>
```


-----

## Components

### Progress Bar

Essential for long-running ABCD tasks (indexing, ISO imports). The styles come from `progressbar.css`.

<div style={{backgroundColor: '#e9ecef', borderRadius: '0.25rem', height: '1.5rem', marginBottom: '1rem', overflow: 'hidden'}}>
<div style={{width: '45%', backgroundColor: '#006699', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.8rem'}}>
45%
</div>
</div>

```html
<div class="progress-container">
    <div class="progress-bar" style="width: 45%;" aria-valuenow="45">45%</div>
</div>
```

### Data Tables

Styling for record lists (`dhtmlXGrid.css`).

<div style={{overflowX: 'auto', border: '1px solid #dee2e6', borderRadius: '4px'}}>
<table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '0'}}>
<thead>
<tr style={{backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6'}}>
<th style={{padding: '0.75rem', textAlign: 'left', color: '#004d73'}}>MFN</th>
<th style={{padding: '0.75rem', textAlign: 'left', color: '#004d73'}}>Title</th>
<th style={{padding: '0.75rem', textAlign: 'left', color: '#004d73'}}>Action</th>
</tr>
</thead>
<tbody>
<tr style={{borderTop: '1px solid #dee2e6'}}>
<td style={{padding: '0.75rem'}}>0001</td>
<td style={{padding: '0.75rem'}}>Introduction to ABCD</td>
<td style={{padding: '0.75rem'}}>
<button style={{backgroundColor: '#006699', color: 'white', border:'none', padding:'4px 8px', borderRadius:'3px', cursor:'pointer'}}>
<i className="fa fa-edit"></i>
</button>
</td>
</tr>
<tr style={{borderTop: '1px solid #dee2e6', backgroundColor: 'rgba(0,0,0,0.02)'}}>
<td style={{padding: '0.75rem'}}>0002</td>
<td style={{padding: '0.75rem'}}>Advanced Cataloging</td>
<td style={{padding: '0.75rem'}}>
<button style={{backgroundColor: '#006699', color: 'white', border:'none', padding:'4px 8px', borderRadius:'3px', cursor:'pointer'}}>
<i className="fa fa-edit"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

```html
<table class="abcd-table table-striped">
    <thead>
        <tr>
            <th>MFN</th>
            <th>Title</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0001</td>
            <td>Title Example</td>
            <td><button class="btn btn-sm btn-primary"><i class="fa fa-edit"></i></button></td>
        </tr>
    </tbody>
</table>
```

### Maps

Used in modules requiring georeferencing. The map container must have an explicit height.

```html
<div id="library-map" style="height: 400px;"></div>
```

-----

## Technical Notes

:::tip Relative Paths
When developing custom PHP scripts in the `htdocs/central/your_module/` folder, remember to reference CSS files by backtracking directories correctly:
`<link rel="stylesheet" href="../../css/all.min.css">`
:::

:::warning Style Conflicts
Avoid using inline styles (`style="..."`). Whenever possible, use the classes defined in `colors.css` and `spaces.css` to ensure the ABCD theme remains maintainable in future updates.
:::

```
```