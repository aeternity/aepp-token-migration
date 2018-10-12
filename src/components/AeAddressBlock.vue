<template>
		<ae-card >
			<article class="ae-address-block">
				<header class="ae-address-block__avatar">
					<ae-avatar :address="address" />
				</header>
				<section class="ae-address-block__input">
					<ae-input label="New æternity address" placeholder="...">
						{{ address }}
						<ae-toolbar slot="footer">
							This field is &nbsp; <a href="#">mandatory</a>
						</ae-toolbar>
					</ae-input>
				</section>
				<footer class="ae-address-block__footer">
					<ae-check name="approve" align="left">
						<ae-text face="sans-s">I am certain my address and identicon are correct</ae-text>
					</ae-check>
					<div class="ae-address-block__footer__button">
						<router-link to="/Connect">
							<ae-button face="round" fill="primary" extend>continue</ae-button>
						</router-link>
					</div>
				</footer>
			</article>
		</ae-card>
</template>

<script>

import AeCard from '@aeternity/aepp-components/dist/ae-card'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeAvatar from '@aeternity/aepp-components/dist/ae-identicon'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeButton from '@aeternity/aepp-components/dist/ae-button'

export default {
  name: 'ae-address-block',
  props: {
    address: String
  },
  components: {
    AeCard,
    AeText,
    AeAvatar,
    AeInput,
    AeToolbar,
    AeCheck,
    AeButton
  }
}
</script>
<style lang="scss" scoped>
	.ae-address-block {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		&__avatar{
			display: flex;
			justify-content: space-evenly;
			width: 100%;
		}
		&__input{
			background-color: $white;
		}
		&__footer{
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
			margin: $spacer-m 0;
			width: 100%;
			&__button {
				width: 18rem;
				margin: 2rem auto;
			}
		}
	}

</style>
