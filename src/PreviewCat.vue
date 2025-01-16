<template>
  <div class="preview-container">
    <div class="cat-thumbnail">
      <img src="./assets/cats/peace-cat.png" alt="">
      <h2>jiggy</h2>
      <h6><span><font-awesome-icon icon="fa-solid fa-trophy" /></span> 3rd</h6>
    </div>
    <div class="preview-data">
      <h5>information</h5>
      <table class="table-info">
        <tbody>
          <tr>
          <td><p>age</p></td>
          <!-- <td><span>:</span></td> -->
          <td>0</td>
        </tr>
        <tr>
          <td><p>breed</p></td>
          <!-- <td><span>:</span></td> -->
          <td>domestic</td>
        </tr>
        <tr>
          <td><p>hobby</p></td>
          <!-- <td><span>:</span></td> -->
          <td>knead dough</td>
        </tr>
        <tr>
          <td><p>hates</p></td>
          <!-- <td><span>:</span></td> -->
          <td>vet and syringe</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="btn-see-activity">
      <button><router-link to="/feeds">see activity</router-link></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewCat'
}
</script>

<style scoped>
h2, h6 {
  text-align: center;
  margin: 0;
  margin-top: 10px;
}

h5 {
  font-size: 1.2rem;
}

.preview-container {
  width: 50%;
  text-align: start;
  display: grid;
  row-gap: 10%;
}

.cat-thumbnail {
  display: grid;
  margin-top: 10%;
}

.cat-thumbnail img {
  max-width: 30%;
  justify-self: center;
}

p {
  margin-bottom: 10px;
}

td {
  padding-right: 20px;
  font-size: 1.2rem;
}

td:nth-child(2) {
  width: 100%;
  text-align: end;
  margin-left: 100px;
}

.btn-see-activity {
  margin: auto;
}

/* .preview-container {
  opacity: 0;
} */
</style>