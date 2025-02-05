---
layout: post
title: "L4y0ut and Gr1d Syst3m"
date: 2023-05-05
---

The H4ck3r Th3m3 uses a flexible grid system for responsive layouts.

<div class="grid">
  <div class="col-6">
    This is a half-width column on larger screens.
  </div>
  <div class="col-6">
    It becomes full-width on smaller screens.
  </div>
</div>

<div class="grid">
  <div class="col-4">Column 1</div>
  <div class="col-4">Column 2</div>
  <div class="col-4">Column 3</div>
</div>

<div class="grid">
  <div class="col-3">Col 1</div>
  <div class="col-3">Col 2</div>
  <div class="col-3">Col 3</div>
  <div class="col-3">Col 4</div>
</div>

You can nest grids for more complex layouts:

<div class="grid">
  <div class="col-8">
    Main Content
    <div class="grid">
      <div class="col-6">Nested Column 1</div>
      <div class="col-6">Nested Column 2</div>
    </div>
  </div>
  <div class="col-4">Sidebar</div>
</div>
