<template>
  <div id="gm_orders_bg">
    <h1> 預約列表 </h1>
    <!-- <n-divider /> -->

    <n-space vertical>
      <n-select
        v-model:value="value" :options="options"
        style="width:20%;margin-left: 70%;"
      />
    </n-space>
    <n-table id="ordersTable" :single-line="false" striped style="margin:auto; margin-top: 5%; width:85%" class="table">
      <thead>
        <tr>
          <th style="text-align: center;">ID</th>
          <th style="text-align: center;">跑團日期</th>
          <th style="text-align: center;">報名模組</th>
          <th style="text-align: center;"> PL </th>
          <!-- <th style="text-align: center;">遊玩日期</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order._id" style="text-align: center;">

          <td style="width: 20%;">
            {{ order._id }}
          </td>

          <td style="width: 20%;">{{ new Date(order.date).toLocaleDateString() }}</td>

          <td style="width: 30%;font-size: 20px;">
            <!-- {{ module.m_id.name }} -->
            <router-link :to="'/modules/' + order.m_id._id" style="text-decoration: none; font-weight: 800; color: #2F4F40;">
              {{ order.m_name }}
            </router-link>
          </td>

          <td style="width: 20%;">
            {{ order.pl_nickname }}
          </td>

        </tr>

        <!-- <tr v-if="order.length === 0">
          <td> 快去手刀預約吧... </td>
        </tr> -->

      </tbody>
    </n-table>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { apiAuth } from '@/plugins/axios'
import Swal from 'sweetalert2'

const orders = reactive([])

const options = [
  {
    label: '按跑團日期排',
    value: 'song0',
    disabled: true
  },
  {
    label: '按模組名稱排',
    value: 'song1'
  },
  {
    label: '按 PL 姓名排',
    value: 'song2'
  }
];

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/gm')

    orders.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得預約失敗'
    })
  }
})()
</script>

<style lang="scss">
  #gm_orders_bg {
    width: 100vw;
height: 200vh;
margin-top: 10vh;
// background: #2F4F40;

h1 {
    text-align: center;
    color: #2F4F40;
  }

  }
</style>
