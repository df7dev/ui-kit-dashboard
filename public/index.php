<?php include'layouts/top.php'; ?>
<!-- Page Content Holder -->
<div class="content-page pt-5">
  <div class="container-fluid pt-2">
    <div class="row">
      <div class="col-xl-3 col-md-6">
        <!-- Chart -->
        <div class="card update-card mb-3">
          <div class="card-block p-2">
              <div class="row mx-0">
                  <div class="col-12">
                      <h4 >$30200</h4>
                      <h6 class=" m-b-0">All Earnings</h6>
                  </div>
              </div>
          </div>
          <div class="card-footer">
              <p class="text-white">
                <i class="far fa-clock"></i> update : 2:15 am
              </p>
          </div>
        </div>
        <!-- Chart -->
      </div>
      <div class="col-xl-3 col-md-6">
        <!-- Chart -->
        <div class="card gradient-red-green update-card mb-3">
          <div class="card-block p-2">
              <div class="row mx-0">
                  <div class="col-12">
                      <h4 >290+</h4>
                      <h6 class=" m-b-0">Page Views</h6>
                  </div>
              </div>
          </div>
          <div class="card-footer">
              <p class="text-white">
              <i class="far fa-clock"></i> update : 2:15 am
              </p>
          </div>
        </div>
        <!-- Chart -->
      </div>
      <div class="col-xl-3 col-md-6">
        <!-- Chart -->
        <div class="card green-solid update-card mb-3">
          <div class="card-block p-2">
              <div class="row mx-0">
                  <div class="col-12">
                      <h4>145</h4>
                      <h6 class=" m-b-0">Task Completed</h6>
                  </div>
              </div>
          </div>
          <div class="card-footer">
              <p class="text-white">
              <i class="far fa-clock"></i> update : 2:15 am
              </p>
          </div>
        </div>
        <!-- Chart -->
      </div>
      <div class="col-xl-3 col-md-6">
        <!-- Chart -->
        <div class="card gradient_red_yellow update-card mb-3">
          <div class="card-block p-2">
              <div class="row mx-0">
                  <div class="col-12">
                      <h4 >500</h4>
                      <h6 class=" m-b-0">Downloads</h6>
                  </div>
              </div>
          </div>
          <div class="card-footer">
              <p class="text-white">
              <i class="far fa-clock"></i> update : 2:15 am
              </p>
          </div>
        </div>
        <!-- Chart -->
      </div>
    </div>
    <!-- Charts -->
   <div class="row py-2">
      <div class="col-xl-6 col-md-12 mb-3">
        <div class="card p-2">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <canvas id="myChart"></canvas>
        </div>
      </div>
      <div class="col-xl-6 col-md-12 mb-3">
        <div class="card p-2">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <canvas id="myChart2"></canvas>
        </div>
      </div>
    </div>
  </div>
  <!-- Table -->
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Select Day</th>
            <th scope="col">Article Name</th>
            <th scope="col">Author</th>
            <th scope="col">Words</th>
            <th scope="col">Shares</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck1" checked>
                  <label class="custom-control-label" for="customCheck1">1</label>
              </div>
            </td>
            <td>Bootstrap 4 CDN and Starter Template</td>
            <td>Cristina</td>
            <td>913</td>
            <td>2.846</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck2">
                  <label class="custom-control-label" for="customCheck2">2</label>
              </div>
            </td>
            <td>Bootstrap Grid 4 Tutorial and Examples</td>
            <td>Cristina</td>
            <td>1.434</td>
            <td>3.417</td>
          </tr>
          <tr>
            <td>
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="customCheck3">
                  <label class="custom-control-label" for="customCheck3">3</label>
              </div>
            </td>
            <td>Bootstrap Flexbox Tutorial and Examples</td>
            <td>Cristina</td>
            <td>1.877</td>
            <td>1.234</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

<?php include'layouts/footer.php'; ?>