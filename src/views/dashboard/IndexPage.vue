<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row">
            <div class="col-md-5 mb-4">
                <DashboardMenu />
            </div>
            <div class="col-md-7 mb-4">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h5 class="font-weight-bold"> <i class="fas fa-tachometer-alt"></i> DASHBOARD</h5>
                        <hr>
                        Selamat Datang <strong></strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardMenu from '@/components/DashboardMenu.vue';

export default {
    name: 'DashboardComponent',

    components: {
        DashboardMenu
    }
}
</script>