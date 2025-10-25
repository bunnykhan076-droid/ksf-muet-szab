// Site JS: tabs, rendering batches, contact form demo
document.getElementById('year').textContent = new Date().getFullYear();

const batches = {
  "2019": {
    "Civil": ["Ubedullah Dahani","Murtaza Bijarani","Zeeshan Bajkani"],
    "Electrical": ["Zarar Qambrani","Fayaz Khoso","Ali Raza Shah"],
    "Mechanical": ["Asif Naseerani"],
    "Electronics": ["Muzafar Bajkani","Waqar Bajkani","Aijaz Dahani"]
  },
  "2020": {
    "Civil": ["Bilal Bajkani","Latif Bajkani","Zameer Bajkani"],
    "Electrical": ["Mohsin Dahani","Qadir Sabzoi","Umar Bhayo","Samad Bajkani","Mansoor Bhayo","Saifullah Bijarani"],
    "Electronics": ["Samo Khan Dahani","Sajid Ogahi"],
    "Petroleum & NG": ["Irfan Bahlkani","Wazir Bahlkani"],
    "Software": ["Ahsan Sabzoi"]
  },
  "2021": {
    "Civil": ["Irfan Gujrani","Junaid Bajkani","Zulfiqar Bajkani","Hidayatullah Bajkani","Shuhab Bajkani"],
    "Electrical": ["Aamir Dahani","Farooque Bhutto"],
    "Mechanical": ["Rauf Mazari"],
    "Electronics": ["Shah Ali Jakhrani"],
    "Petroleum & NG": ["Tahir Bajkani"],
    "Software": ["Muzamil Golo"]
  },
  "2022": {
    "Civil": ["Meer Hazar Bangwar","Faraz Banglani","Tariq Bajkani","Amir Bajkani","Lakhmir Bajkani","Shaban Bajkani"],
    "Electrical": ["Danish Bajkani","Safdar Gujrani"],
    "Mechanical": ["Hammad Malik"],
    "Software": ["Asad Bhayo"]
  },
  "2023": {
    "Civil": ["Irfan Dahani","Rauf Gujrani","Ali Hassan Bahlkani"],
    "Electrical": ["Sanaullah Bajkani","Qayoom Bajkani","Jabbar Gujrani","Abbas Bajkani","Aslam Bajkani"],
    "Electronics": ["Rafeeq Dahani","Israr Bajkani"]
  },
  "2024": {
    "Civil": ["Awais Dahani","Yameen Bajkani","Ihsan Bajkani","Muhammad Ali Jakhrani","Niaz Bajkani"],
    "Electrical": ["Nasir Golo","Israr Bajkani","Shoaib Bajkani","Ahmed Sabzoi"],
    "Software": ["Niaz Gul Bhayo"]
  }
};

function renderBatch(year){
  const panel = document.getElementById('panel');
  panel.innerHTML = '';
  const data = batches[year];
  if(!data){ panel.innerHTML = '<div class="muted">No data for this year.</div>'; return; }
  for(const dept in data){
    const d = document.createElement('div'); d.className='dept';
    d.innerHTML = `<h4>${dept}</h4><ul class="students">${data[dept].map(s => `<li>${s}</li>`).join('')}</ul>`;
    panel.appendChild(d);
  }
}

// tabs
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    renderBatch(btn.dataset.year);
  })
});
renderBatch('2019');

// contact form demo (static)
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! This demo form is static. To receive messages, connect it to an email service or backend (instructions in README).');
});
