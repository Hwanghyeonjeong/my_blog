<?php
include "../part/head.php";


// 전화걸기
$dbConn = mysqli_connect("hyeonjeong.site", "sbsst", "sbs123414", "blog", 3306);

// 전화연결이 성공했다면 이 부분 실행됨

if ( isset($_GET['cateItemId']) == false ) {
    $_GET['cateItemId'] = 0;
}

$cateItemId = $_GET['cateItemId'];

$cateItemName = '전체';

if ( $cateItemId != 0 ) {
    $sql = "
    SELECT name
    FROM cateItem
    WHERE id = '{$cateItemId}'
    ";
    $rs = mysqli_query($dbConn, $sql);
    $row = mysqli_fetch_assoc($rs);
    $cateItemName = $row['name'];
}

// 상대방에게 할말 적기
$sql = "
SELECT *
FROM article
";

if ( $cateItemId != 0 ) {
    $sql .= "
    WHERE cateItemId = '{$cateItemId}'
    ";
}

$sql .= "
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

$sql = "
SELECT *
FROM cateItem
ORDER BY id ASC
";

// 말하고 응답받기
$rs = mysqli_query($dbConn, $sql);
$cateItems = [];
while ( true ) {
    $row = mysqli_fetch_assoc($rs);
    if ( $row == null ) {
        break;
    }
    $cateItems[] = $row;
}
?>
<link rel="stylesheet" href="resource/list.css">

<div class="cate">
    <ul>
        <li>CATEGORY</li>
        <li class="<?=$cateItemId == 0 ? "active" : ""?>"><a href="/list.php">TOTAL</a></li>
        <?php foreach ( $cateItems as $cateItem ) { ?>
        <li class="<?=$cateItemId == $cateItem['id'] ? "active" : ""?>"><a href="/list.php?cateItemId=<?=$cateItem['id']?>"><?=$cateItem['name']?></a></li>
        <?php } ?>
    </ul>
</div>

<?php if ( empty($rows) ) { ?>
<div class="con">
    게시물이 존재하지 않습니다.
</div>
<?php } else { ?>
<div class="list-box-1 con">
    <ul class="flex flex-row-wrap">
        <?php foreach ( $rows as $row ) { ?>
        <li>
            <a href="/detail.php?id=<?=$row['id']?>">
                <div class="img-box" style="background-image:url(<?=$row['thumbImgUrl']?>);"></div>
                <div class="title"><?=$row['title']?></div>
                <div class="summary"><?=$row['summary']?></div>
            </a>
        </li>
        <?php } ?>
    </ul>
</div>
<?php } ?>
<?php
include "../part/foot.php";
?>