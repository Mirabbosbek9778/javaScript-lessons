var sum = 0;
for (i = 0; i < 12; i++) {
  console.log((sum += i));
  if (sum == 10) break;
}
