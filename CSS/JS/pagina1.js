// Area Chart
const areaCtx = document.getElementById('areaChart').getContext('2d');
new Chart(areaCtx, {
  type: 'line',
  data: {
    labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven'],
    datasets: [{
      label: 'Consumo alcol',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(197, 66, 245, 0.2)',
      borderColor: '#c542f5',
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Donut Chart
const donutCtx = document.getElementById('donutChart').getContext('2d');
new Chart(donutCtx, {
  type: 'doughnut',
  data: {
    labels: ['Maschi', 'Femmine'],
    datasets: [{
      data: [65, 35],
      backgroundColor: ['#c542f5', '#6f42c1'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    cutout: '70%'
  }
});
