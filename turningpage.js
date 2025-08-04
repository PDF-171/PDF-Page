<!DOCTYPE html>
<html>
<head>
    <title>Turn.js Example</title>
    <link rel="stylesheet" type="text/css" href="css/basic.css">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/turn.min.js"></script>
</head>
<body>

<div id="book">
    <div class="page">Page 1 Content</div>
    <div class="page">Page 2 Content</div>
    <div class="page">Page 3 Content</div>
    <div class="page">Page 4 Content</div>
</div>

<script type="text/javascript">
    $(window).ready(function() {
        $('#book').turn({
            width: 800,
            height: 600,
            autoCenter: true,
            gradients: true,
            elevation: 50
        });
    });
</script>

</body>
</html>
