<?php
include "../part/head.php";


// 전화번호 세팅
$dbHost = "site9.blog.oa.gg";
$dbPort = 3306;
$dbId = "site9";
$dbPw = "sbs123414";
$dbName = 'site9';

// 전화걸기
$dbConn = mysqli_connect($dbHost, $dbId, $dbPw, $dbName, $dbPort) or die("DB CONNECTION ERROR");

// 전화연결이 성공했다면 이 부분 실행됨

if ( isset($_GET['cateItemId']) == false ) {
    $_GET['cateItemId'] = 1;
}

$cateItemId = $_GET['cateItemId'];

$sql = "
SELECT name
FROM cateItem
WHERE id = '{$cateItemId}'
";
$rs = mysqli_query($dbConn, $sql);
$row = mysqli_fetch_assoc($rs);
$cateItemName = $row['name'];

// 상대방에게 할말 적기
$sql = "
SELECT *
FROM article
WHERE cateItemId = '{$cateItemId}'
ORDER BY id DESC
";

// 말하고 응답받기
$rs = mysqli_query($dbConn, $sql);
$rows = [];
while ( true ) {
    $row = mysqli_fetch_assoc($rs);
    if ( $row == null ) {
        break;
    }
    $rows[] = $row;
}


?>
<link rel="stylesheet" href="resource/list.css">



<div class="sun-1"></div>
<div class="sun-2"></div>


<h1 class="con"><?=$cateItemName?> 게시물 리스트</h1>

<style>
.list-box-1 > ul > li > a > img {
    width:150px;
}

.list-box-1 > ul > li {
    margin-top:15px;
}
</style>

<?php if ( empty($rows) ) { ?>
<div class="con">
    게시물이 존재하지 않습니다.
</div>
<?php } else { ?>
<div class="list-box-1 con">
    <ul>
        <?php foreach ( $rows as $row ) { ?>
        <li>
            <a class="flex" href="/detail.php?id=<?=$row['id']?>">
                <img src="<?=$row['thumbImgUrl']?>" alt="">
                <div>
                    <?=$row['title']?>
                    <br>
                    <?=$row['body']?>
                    <?=$row['summary']?>
                </div>
            </a>
        </li>
        <?php } ?>
    </ul>
</div>
<?php } ?>
<?php
include "../part/foot.php";
?> 