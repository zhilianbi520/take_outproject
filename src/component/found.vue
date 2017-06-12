<template>
	<div>
		<mu-tabs :value="activeTab" @change="handleTabChange">
		    <mu-tab value="tab1" title="TAB ONE"/>
		    <mu-tab value="tab2" title="TAB TWO"/>
		    <mu-tab value="tab3" @active="handleActive" title="TAB ACTIVE"/>
		</mu-tabs>
		<div v-if="activeTab === 'tab1'">
		    <h2>Tab One</h2>
		    <p>
		      这是第一个 tab
		    </p>
		</div>
		<div v-if="activeTab === 'tab2'">
		    <h2>Tab Two</h2>
		    <p>
		      这是第二个 tab
		    </p>
		</div>
		<div v-if="activeTab === 'tab3'">
		    <h2>Tab Three</h2>
		    <p>
		      这是第三个 tab
		    </p>
		</div>
	</div>	
</template>
<script type="text/javascript">
	export default{
		data (){
			return {
				found : 'found',
				activeTab : 'tab1'
			}
		},
		methods: {
		    handleTabChange (val) {
		      this.activeTab = val
		    },
		    handleActive () {
		      window.alert('tab active')
		    }
		}
	}
</script>