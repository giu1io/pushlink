<template>
  <div>
    <h1>Hi, this is your secret bookmark page:</h1>
    <h3>
      <a :href="pushBookMarklet">
        Push Link
      </a>
      <span> &#8592; drag this in your bookmarks</span>
    </h3>
    <h3>
      <a :href="pullBookmark">
        Pull Link
      </a>
      <span> &#8592; drag this in your bookmarks</span>
    </h3>

    <h4>Are you on iOS? <a rel="noreferrer" target="_blank" href="https://www.cultofmac.com/500532/how-to-add-bookmarklet-mobile-iphone-safari/">Instructions</a></h4>

    <div>
      <strong>Push:</strong>
    </div>
    <div>
      <textarea v-model="pushBookMarklet" readonly />
    </div>

    <div>
      <strong>Pull:</strong>
    </div>
    <div>
      <a :href="pullBookmark">
        <h4>Hold here and add to bookmarks</h4>
      </a>
    </div>

    <h4>Want to open this page on another device? Scan this QR code: </h4>
    <div>
      <qrcode-vue :value="location" size="200" />
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    QrcodeVue
  },
  asyncData ({ params: { id } }) {
    return {
      id,
      pushBookMarklet: `javascript:(function()%7Bwindow.location%20%3D%20'${encodeURIComponent(`${process.env.apiUrl}/push/${id}`)}%3Furl%3D'%2BencodeURIComponent(window.location)%7D)()`,
      pullBookmark: `${process.env.apiUrl}/pull/${id}`,
      location: `${process.env.baseUrl}/private/${id}`
    }
  }
}
</script>

<style>
  body {
    font-family: sans-serif;
  }

  textarea {
    width: 100%;
    min-height: 70px;
  }

  @media screen and (min-width: 1000px) {

    textarea {
      width: 700px;
    }

  }
</style>
