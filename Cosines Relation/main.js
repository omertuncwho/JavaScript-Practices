function cosinesR(a, b, angle) {
    let cosines = Math.sqrt(a**2 + b**2 - 2 * a * b * Math.cos(angle * Math.PI / 180));
    console.log(`Cosines is: ${cosines}`);
}

cosinesR(6, 10, 120);
