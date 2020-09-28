<?php
include "./head_head.php"
?>
<!-- 여기에는 css js 넣어주세요 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>


<link rel="stylesheet" href="./resource/about.css">
<script src="./resource/about.js"></script>

<?php
include "./head_body.php"
?>
<!-- 여기부터 작성하시면 됩니다. -->
<div class="back">
<img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/meme.png?" alt="">
</div>
<div class="profile con">
    <div class="title">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/post.png?" alt="">
        <div class="text">profile</div>
    </div>
    <div class="name flex">
        <div class="kr">황현정</div>
        <div class="en">Hwang Hyeon jeong</div>
    </div>
    <div class="info">2000.01.25<br>
대전광역시 서구 둔산동<br>
010 3370 5680<br>
E-mail : mn06150@naver.com<br>
wiki : to2.kr/bk3<br>
Blog : https://hyeonjeonghwang.tistory.com/</div>
</div>

<div class="skills">
<div class="title">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/post.png?" alt="">
        <div class="text">Skills</div>
    </div>
    <div class="photo">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/html.png" alt="">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/css.png" alt="">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/js.png" alt="">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/ps.png" alt="">
        <img src="https://hwanghyeonjeong.github.io/img1/pf/portfolio/ai.png" alt="">
    </div>
</div>


<div class="chart">
    <canvas id="line-chart" width="450" height="100"></canvas>
</div>