<template>
  <div class="user__list">
    <h1>User list</h1>  
    <div class="user__item"
    v-for="(user,index) in userList" 
    :key="index"
    >
    <p>id: {{user.id}} nickname: {{user.nickname}}</p>
    <div class="delete-icon" @click="deleteUser(user.id)">
      <BinIcon></BinIcon>
    </div>
    </div>
    <span v-if="userList.length < 1" class="empty">List empty</span>
  </div>
</template>
<script>
import BinIcon from "@/icons/BinIcon.vue"
import {mapActions, mapState} from 'vuex';
export default  {
    components: { BinIcon },
    computed: {
        ...mapState({
            userList: state => state.users
        })
    },
    methods: {
      ...mapActions({
        delHandler: 'delHandler'
      }),
      deleteUser(id) {
        this.delHandler(id);
      }
    }
}
</script>
<style scoped>
  li {
    list-style-type: none;
    text-align: left;
    display: inline-block;
  }

  .user__list {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
  }

  .user__item {
    border: 1px solid rgb(67, 67, 67);
    border-radius: 5px;
    margin: 10px 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .delete-icon:hover {
    cursor: pointer;
  }

  .empty {
    font-size: 25px;
    font-weight: bold;
    color:red;
  }
</style>