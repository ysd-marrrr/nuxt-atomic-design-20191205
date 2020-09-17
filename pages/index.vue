<template>
  <div class="root-contents">
    <main-template
      :display-amount-prop="displayAmount"
      :is-display-stars-prop="isDisplayStars"
      :display-stars-options-prop="displayStarsOptions"
      :review-data-prop="actualDisplayData"
      @onDisplaySettingsChanged="onDisplaySettingsChanged"
    />
  </div>
</template>

<script>
import MainTemplate from '~/components/templates/main/MainTemplate.vue'

export default {
  components: {
    MainTemplate,
  },
  data: function () {
    return {
      reviewData: [
        { stars: 3, title: '普通です', comment: '可もなく不可もない商品です' },
        {
          stars: 1,
          title: '3日目で突然逃げ出しました',
          comment: '返金希望です！',
        },
        {
          stars: 1,
          title: 'やっぱり',
          comment: 'もともと期待などしていなかったが、見事に期待外れです☆',
        },
        {
          stars: 4,
          title: 'ちょっとよかったです',
          comment: '可もなく不可もない商品です',
        },
        { stars: 2, title: '使えない', comment: '思った以上に使えない。' },
        { stars: 1, title: '最悪です', comment: '一週間で捨てました。' },
        {
          stars: 3,
          title: '普通です',
          comment: 'この性能でこの価格はお得!!買ってよかった～',
        },
        {
          stars: 5,
          title: '素晴らしい',
          comment: '価格、質がよく、使い勝手もいいです。かなりお勧めです。',
        },
        {
          stars: 5,
          title: 'みずみずしい50年',
          comment:
            '「みずみずしさが感じられるフルーティーで50年」 ボボョジョジ・ヌーボヌボボ',
        },
        {
          stars: 4,
          title: 'すげぇ',
          comment: 'まじかよ、空飛ぶなんて聞いてない',
        },
        {
          stars: 2,
          title: '使いづらい',
          comment: '時折、天井にくっついてます',
        },
        {
          stars: 3,
          title: 'くせあり',
          comment: '商品として何か問題ありです。',
        },
        {
          stars: 4,
          title: 'おしい',
          comment: 'かなり良いのですが、少々質が悪いと思いました…',
        },
        {
          stars: 5,
          title: '素晴らしいです',
          comment:
            '「品質は申し分の無い収穫できた」 ジョレージレー・ヌーボヌボーボー',
        },
        {
          stars: 3,
          title: '何も感じません',
          comment: '早く届けばいいかなぁって',
        },
        {
          stars: 3,
          title: '素晴らしく何も良いところがない',
          comment: '何も言えない',
        },
      ],
      displayAmount: 7,
      isDisplayStars: true,
      displayStarsOptions: [
        { value: 'false', text: 'OFF' },
        { value: 'true', text: 'ON' },
      ],
    }
  },
  computed: {
    actualDisplayData: function () {
      return this.reviewData.slice(0, this.displayAmount)
    },
  },
  methods: {
    onDisplaySettingsChanged: function (newValue) {
      const type = newValue.type
      const value = newValue.value
      if (type === 'displayAmount') {
        this.displayAmount = Number(value)
      } else if (type === 'displayStars') {
        this.isDisplayStars = this.strToBool(value)
      }
    },
    strToBool: function (str) {
      return str.toLowerCase() === 'true'
    },
  },
}
</script>

<style lang="scss" scoped>
.root-contents {
  margin-top: 2rem;
}
</style>
