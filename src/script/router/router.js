

// Shared info
import MasterLayout from '../../layout/shared/MasterLayout.vue';
import NotFound from '../../views/NotFoundPage.vue';

// General info
import Dashboard from '../../views/Dashboard.vue';
import Jobs from '../../views/Jobs.vue';
import Schedules from '../../views/Schedules.vue';
import Machine from '../../views/Machine.vue';
import Package from '../../views/Package.vue';

const routes = [{
        path: "/",
        component: MasterLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
            {
                path: "jobs",
                name: "jobs",
                component: Jobs
            },
            {
                path: "schedules",
                name: "schedules",
                component: Schedules
            },
            {
                path: "machine",
                name: "machine",
                component: Machine
            },
            {
                path: "package",
                name: "package",
                component: Package
            }
    ]},
    { path: "*", component: NotFound }
];

export default routes;