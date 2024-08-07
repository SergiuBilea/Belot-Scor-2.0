const total1 = document.querySelector('.total1')
const total2 = document.querySelector('.total2')
const total3 = document.querySelector('.total3')
const total4 = document.querySelector('.total4')

const bile1 = document.querySelectorAll('.bile1')
const bile2 = document.querySelectorAll('.bile2')
const bile3 = document.querySelectorAll('.bile3')
const bile4 = document.querySelectorAll('.bile4')


function updateTotals() {
 let count1 = 0;
 let count2 = 0;
 let count3 = 0;
 let count4 = 0;

bile1.forEach(element => {
  count1 += parseFloat(element.value) || 0;
 });
 bile2.forEach(element => {
  count2 += parseFloat(element.value) || 0;
 });
 bile3.forEach(element => {
  count3 += parseFloat(element.value) || 0;
 });
 bile4.forEach(element => {
  count4 += parseFloat(element.value) || 0;
 });

 // Update the total inputs
 total1.value = count1;
 total2.value = count2;
 total3.value = count3;
 total4.value = count4;
}

document.querySelectorAll('.bile1, .bile2, .bile3, .bile4').forEach(element => {
 element.addEventListener('input', updateTotals);
});

updateTotals();