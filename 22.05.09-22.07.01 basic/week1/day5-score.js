function grade(score) {
  if (score < 0 || score > 100) {
    return '잘못된 점수입니다.';
  }
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
