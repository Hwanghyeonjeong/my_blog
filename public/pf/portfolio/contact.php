<?php
include "./head_head.php"
?>
<!-- 여기에는 css js 넣어주세요 -->
<link rel="stylesheet" href="./resource/contact.css">
<script src="./resource/contact.js"></script>

<?php
include "./head_body.php"
?>

<div class="title con"><img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/contact4.png" alt=""></div>

<div class="cover">
<img class="tjs"src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/tjstjs.png?dummy" alt="">
<img class="tjs"src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/tjstjs.png?dummy" alt="">
<img class="tjs"src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/tjstjs.png?dummy" alt="">
<img class="tjs"src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/tjstjs.png?dummy" alt="">
<img class="tjs"src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/tjstjs.png?dummy" alt="">
<img class="tjs"src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/tjstjs.png?dummy" alt="">
</div>



<form action onsubmit="sendEmailFormSubmit(this); return false;" name="sendEmailForm">
    <input type="hidden" name="receiverName" value="황현정">
    <input type="hidden" name="receiverEmail" value="mn06150@naver.com">
    <div class="name"><input type="text" name="senderName" placeholder="Name"></div>
    <div class="email"><input type="email" name="senderEmail" placeholder="E-mail"></div>
    <div class="body">
        <textarea name="body" placeholder="Message" style="width:100%; height:100%;"></textarea>
    </div>
    <ul class="flex number">
    <li class="flex"><div class="bold">Phone</div> : 010 3370 5680</li>
    <li class="flex"><div class="bold">E-mail</div> : mn06150@naver.com</li>
</ul>
    <div class="submit">
        <input type="submit" value="Send">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/tjstjs.png?dummy" alt="">
    </div>
</form>