function calculatePaintCost() {
    const length = parseFloat(document.getElementById('roomLength').value) || 0;
    const width = parseFloat(document.getElementById('roomWidth').value) || 0;
    const height = parseFloat(document.getElementById('roomHeight').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const coats = parseInt(document.getElementById('numCoats').value) || 2;
    const currencySymbol = document.getElementById('currencySelect').value;
    const costPerLitre = parseFloat(document.getElementById('unitCost').value) || 15;

    if (length <= 0 || width <= 0 || height <= 0) {
        alert('Please enter valid room dimensions!');
        return;
    }

    const perimeter = 2 * (length + width);
    const grossWallArea = perimeter * height;
    
    let netArea = grossWallArea - deductions;
    if (netArea < 0) netArea = 0;

    const totalPaintedArea = netArea * coats;
    const litresNeeded = totalPaintedArea / 100;
    const estimatedCost = litresNeeded * costPerLitre;

    document.getElementById('totalArea').textContent = netArea.toFixed(2);
    document.getElementById('paintLitres').textContent = litresNeeded.toFixed(1);
    document.getElementById('currencySymbol').textContent = currencySymbol;
    document.getElementById('totalCost').textContent = estimatedCost.toFixed(2);
    
    document.getElementById('resultBox').style.display = 'block';
}
