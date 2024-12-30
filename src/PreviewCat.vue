<template>
  <div class="preview-container">
    <img src="./assets/cats/peace-cat.png" alt="">
    <h2>jiggy</h2>
    <div class="preview-data">
      <h5>information</h5>
      <table class="table-info">
        <tr>
          <td ><p>age</p></td>
          <td><span>:</span></td>
        </tr>
        <tr>
          <td><p>breed</p></td>
          <td><span>:</span></td>
        </tr>
        <tr>
          <td><p>hobby</p></td>
          <td><span>:</span></td>
        </tr>
        <tr>
          <td><p>hates</p></td>
          <td><span>:</span></td>
        </tr>
      </table>
    </div>
    <span>see activities</span>
  </div>
</template>

<script>
export default {
  name: 'PreviewCat'
}
</script>

<style>
.preview-container {
  text-align: start;
}

td {
  padding-right: 20px;
}
</style>