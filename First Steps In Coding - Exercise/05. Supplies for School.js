function SuppliesForSchool(pens, markers, cleaner, procent) {
    let total = (pens * 5.80 + markers * 7.20 + cleaner * 1.20) * (1 - (procent / 100));
    console.log(total);
};
SuppliesForSchool(2, 3, 4, 25);