<template>
    <div id="login">
        <div class="login" style="visibility: hidden;"></div>
        <div class="login">
            <Input placeholder="Enter name" style="width: auto">
                <Icon type="ios-contact" slot="prefix" />
            </Input>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
};
</script>
<style lang="scss" scoped>
#login {
    background: url('../assets/swim.jpg') no-repeat;
    background-size: cover;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .login {
        width: 400px;
        height: 280px;
        background: lightskyblue;
        opacity: 0.8;
        // margin-right: 20em;
    }
}
</style>
