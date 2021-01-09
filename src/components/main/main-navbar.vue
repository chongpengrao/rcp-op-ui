<template>
    <nav class="navbar">
        // 侧边栏上部导航页面 - 点击可返回主页
        <div class="header" @click="$router.push({ name: 'home' })">
            <h1>
                // href="javascript:;" 点击标签时不执行任何操作
                <a class="brand-large" href="javascript:;">RCP-OP权限管理系统</a>
                <a class="brand-mini" href="javascript:;">OP</a>
            </h1>
        </div>
        // 主体内容上部导航页面
        <div class="body">
            // 第一层导航菜单
            <a-menu></a-menu>
            // 第二层导航菜单
            <a-menu></a-menu>
        </div>
    </nav>
</template>