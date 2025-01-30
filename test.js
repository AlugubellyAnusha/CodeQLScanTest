<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<h2>The replace() Method</h2>

<p>replace() searches a string for a value,
and returns a new string with the specified value(s) replaced:</p>

<p id="demo">Visit Microsoft!</p>

<script>
let text = document.getElementById("demo").innerHTML; 
document.getElementById("demo").innerHTML = text.replace("Microsoft", "W3Schools");
</script>

</body>
</html>
