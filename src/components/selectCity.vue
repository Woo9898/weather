<template>
  <select v-model="selected">
    <option disabled value="">지역 선택</option>
    <option value="서울">서울</option>
    <option value="부산">부산</option>
    <option value="대구">대구</option>
    <option value="인천">인천</option>
    <option value="광주">광주</option>
    <option value="대전">대전</option>
    <option value="울산">울산</option>
    <option value="경기">경기</option>
    <option value="강원">강원</option>
    <option value="충남">충남</option>
    <option value="충북">충북</option>
    <option value="전남">전남</option>
    <option value="전북">전북</option>
    <option value="경남">경남</option>
    <option value="경북">경북</option>
    <option value="제주">제주</option>
    <option value="세종">세종</option>
  </select>
</template>

<script>

export default {
    data(){
        return{
            selected: '',
        }
    },
    
    watch:{
        selected(newValue){

            if(this.$route.path === "/finedust"){
                this.$store.dispatch('fetchDustInfo', newValue)
                .catch(error => console.log(error))
            }
             else if(this.$route.path === "/weather"){
                
                this.$store.dispatch('fetchWeatherInfo', newValue)
                
                
                
            }
            
        }
    }
   
}
</script>

<style>

</style>