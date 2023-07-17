<template>
    <div class="w-full">
        <div class="bg-teal-600 z-[-1] w-full h-[225px] fixed top-0"></div>
        <div class="bg-[#191919] z-[-1] w-full h-[calc(100vh-225px)] fixed bottom-0"></div>

        <div class="max-w-xl mx-auto">
            <div class="mt-10 flex items-center w-full">
                <img width="40" src="whatsapp-logo.png" alt="">
                <div class="font-semibold text-gray-100 ml-6">WHATSAPP WEB</div>
            </div>

            <div class="bg-white z-10 p-24 m-6 mt-10">
                <div class="text-center text-4xl text-gray-700 font-light pb-10">
                    WhatsApp Clone
                </div>
                <div class="w-full flex justify-center bg-[#191919] p-3 rounded-md">
                    <GoogleLogin :callback="callback"/>
            </div>
            <div class="mt-6">
        <form @submit.prevent="submitPhoneNumber">
          <div class="flex items-center mb-4">
            <label for="phone" name="phoneLabel" class="text-gray-700 mr-4">Phone Number:</label>
            <input
              id="phone"
              type="tel"
              v-model="phoneNumber"
              class="border border-gray-400 px-3 py-2 rounded"
              required
            />
          </div>
          <div class="flex justify-center">
            <v-btn
              @click="$router.push('/')"
              type="submit"
              class="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-500"
            >
              Submit
            </v-btn>
          </div>
        </form>
    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store/user-store'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

const callback = async (response) => {
    await userStore.getUserDetailsFromGoogle(response)
    setTimeout(() => { router.push('/') }, 200)
}
</script>

<style lang="scss" scoped>

</style>