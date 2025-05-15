import React from 'react';
import { Card, Grid, Group, MantineColor, Paper, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import {
  Box,
  BrandApple,
  BuildingWarehouse,
  FileBarcode,
  Icon,
  Percentage,
  Star,
  Truck,
  Users,
  Cash,
  Medal
} from 'tabler-icons-react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis, Cell, Legend, LabelList, Label } from 'recharts';
import { useQuery } from 'react-query';
import FetchUtils, { ErrorMessage } from 'utils/FetchUtils';
import ResourceURL from 'constants/ResourceURL';
import NotifyUtils from 'utils/NotifyUtils';
import { StatisticResource, StatisticResponse } from 'models/Statistic';
import DateUtils from 'utils/DateUtils';

const dateReducerForStatisticResources = (statisticResources: StatisticResource[]) => statisticResources.map((statisticResource) => ({
  date: DateUtils.isoDateToString(statisticResource.date, 'DD/MM/YY'),
  total: statisticResource.total,
}));

function AdminDashboard() {
  const theme = useMantineTheme();
  const { statisticResponse } = useGetStatisticApi();
  const statistic = statisticResponse as StatisticResponse;
  const colors = ['#00C49F','#0088FE', '#FFBB28', '#FF8042'];

  return (
    <Stack mb={30}>
      <Title order={3}>Thống kê hệ thống</Title>
      {/* Card */}
      <Paper shadow="xs" p="md">
        <Stack>
          <Text size="lg" weight={500} color="dimmed">Tổng quan kinh doanh tháng</Text>

          {/* Báo cáo doanh thu  */}
          <Grid>
            <Grid.Col span={6}>
              <OverviewCard title="Tổng doanh thu" value={5200000} color="green" icon={Cash}/>
            </Grid.Col>
            <Grid.Col span={6}>
              <OverviewCard title="Tổng lợi nhuận" value={1350000} color="lime" icon={Cash}/>
            </Grid.Col>
            <Grid.Col span={6}>
              <OverviewCard title="Phần trăm lợi nhuận" value={25.9} color="blue" icon={Percentage}/>
            </Grid.Col>
            <Grid.Col span={6}>
              <OverviewCard title="Sản phẩm bán chạy nhất" value={statistic.totalCustomer} color="yellow" icon={Medal}/>
            </Grid.Col>
          </Grid>
        </Stack>
      </Paper>
      <Paper shadow="xs" p="md">
        <Stack>
          <Text size="lg" weight={500} color="dimmed">Tổng quan cửa hàng</Text>

          <Grid>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số khách hàng" value={statistic.totalCustomer} color="blue" icon={Users}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số sản phẩm" value={statistic.totalProduct} color="orange" icon={Box}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số đơn hàng" value={statistic.totalOrder} color="teal" icon={FileBarcode}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số vận đơn" value={statistic.totalWaybill} color="grape" icon={Truck}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số đánh giá" value={statistic.totalReview} color="yellow" icon={Star}/>
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard
                title="Tổng số khuyến mãi"
                value={statistic.totalActivePromotion}
                color="pink"
                icon={Percentage}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard
                title="Tổng số nhà cung cấp"
                value={statistic.totalSupplier}
                color="violet"
                icon={BuildingWarehouse}
              />
            </Grid.Col>
            <Grid.Col span={3}>
              <OverviewCard title="Tổng số thương hiệu" value={statistic.totalBrand} color="indigo" icon={BrandApple}/>
            </Grid.Col>
          </Grid>
          
        </Stack>
      </Paper>
      {/*Chart*/}
      <Grid>
        <Grid.Col lg={6}>
          <Stack>
            <Paper shadow="xs" p="md">
              <Stack>
                <Group position="apart">
                  <Text size="lg" weight={500} color="dimmed">Lượt đặt hàng</Text>
                  <Text size="sm" color="dimmed">7 ngày gần nhất</Text>
                </Group>

                <BarChart
                  width={500}
                  height={275}
                  data={dateReducerForStatisticResources(statistic.statisticOrder)}
                  margin={{ top: 10, right: 5, bottom: 0, left: -10 }}
                >
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <Tooltip/>
                  <Bar
                    name="Số lượt đặt hàng"
                    dataKey="total"
                    fill={theme.colors.teal[5]}
                  />
                </BarChart>
              </Stack>
            </Paper>
            <Paper shadow="xs" p="md">
              <Stack>
                <Group position="apart">
                  <Text size="lg" weight={500} color="dimmed">Đơn hàng theo nguồn</Text>
                  <Text size="sm" color="dimmed"></Text>
                </Group>


                <PieChart
                  width={500}
                  height={275}
                  margin={{ top: 10, right: 5, bottom: 0, left: -10 }}
                >
                  <Legend/>
                  <Tooltip/>
                  <Pie data={statistic.statisticOrderByResource} dataKey="total" nameKey="criteria" label  >
                    {statistic.statisticOrderByResource.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>      

                </PieChart>
              </Stack>
            </Paper>
            <Paper shadow="xs" p="md">
              <Stack>
                <Group position="apart">
                  <Text size="lg" weight={500} color="dimmed">Lượt đăng ký tài khoản</Text>
                  <Text size="sm" color="dimmed">7 ngày gần nhất</Text>
                </Group>

                <LineChart
                  width={500}
                  height={275}
                  data={dateReducerForStatisticResources(statistic.statisticRegistration)}
                  margin={{ top: 10, right: 5, bottom: 0, left: -10 }}
                >
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <Tooltip/>
                  <Line
                    name="Số lượt đăng ký"
                    type="monotone"
                    dataKey="total"
                    stroke={theme.colors.blue[5]}
                  />
                </LineChart>
              </Stack>
            </Paper>
          </Stack>
        </Grid.Col>

        <Grid.Col lg={6}>
          <Stack>
            <Paper shadow="xs" p="md">
              <Stack>
                <Group position="apart">
                  <Text size="lg" weight={500} color="dimmed">Lượt tạo vận đơn</Text>
                  <Text size="sm" color="dimmed">7 ngày gần nhất</Text>
                </Group>

                <BarChart
                  width={500}
                  height={275}
                  data={dateReducerForStatisticResources(statistic.statisticWaybill)}
                  margin={{ top: 10, right: 5, bottom: 0, left: -10 }}
                >
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <Tooltip/>
                  <Bar
                    name="Số lượt tạo vận đơn"
                    dataKey="total"
                    fill={theme.colors.grape[5]}
                  />
                </BarChart>
              </Stack>
            </Paper>
            <Paper shadow="xs" p="md">
              <Stack>
                <Group position="apart">
                  <Text size="lg" weight={500} color="dimmed">Lượt đánh giá sản phẩm</Text>
                  <Text size="sm" color="dimmed">7 ngày gần nhất</Text>
                </Group>

                <LineChart
                  width={500}
                  height={275}
                  data={dateReducerForStatisticResources(statistic.statisticReview)}
                  margin={{ top: 10, right: 5, bottom: 0, left: -10 }}
                >
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <Tooltip/>
                  <Line
                    name="Số lượt đánh giá"
                    type="monotone"
                    dataKey="total"
                    stroke={theme.colors.yellow[7]}
                  />
                </LineChart>
              </Stack>
            </Paper>
            <Paper shadow="xs" p="md">
              <Stack>
                <Group position="apart">
                  <Text size="lg" weight={500} color="dimmed">Doanh thu theo thời gian</Text>
                  <Text size="sm" color="dimmed"></Text>
                </Group>

                <LineChart
                  width={500}
                  height={275}
                  data={dateReducerForStatisticResources(statistic.statisticRevenueByDate)}
                  margin={{ top: 10, right: 5, bottom: 0, left: 20 }}
                >
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <Tooltip/>
                  <Line
                    name="Doanh thu"
                    type="monotone"
                    dataKey="total"
                    stroke={theme.colors.green[7]}
                  />
                </LineChart>
              </Stack>
            </Paper>
          </Stack>
        </Grid.Col>   
      </Grid>
      <Grid>
        <Grid.Col lg={12}>
          <Paper shadow="xs" p="md">
            <Stack>
              <Group position="apart">
                <Text size="lg" weight={500} color="dimmed">Doanh thu theo sản phẩm</Text>
              </Group>

              <BarChart
                width={1100}
                height={500}
                data={statistic.statisticRevenueByProduct }
                margin={{ top: 10, right: 5, bottom: 20, left: 10 }}
                layout='vertical'
              >
                <XAxis type='number'/>
                <YAxis dataKey="criteria" type='category' width={200}/>
                <Tooltip/>
                <Bar
                  name="Doanh thu"
                  dataKey="total"
                  fill={theme.colors.teal[5]}
                >
                  <LabelList dataKey="total" position="right" />
                </Bar> 
              </BarChart>
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
      
    </Stack>
  );
}

interface OverviewCardProps {
  title: string;
  value: number | string;
  color: MantineColor;
  icon: Icon;
}

function OverviewCard({ title, value, color, icon }: OverviewCardProps) {
  const theme = useMantineTheme();

  const Icon = icon;

  return (
    <Card sx={{
      backgroundColor: theme.colors[color][theme.colorScheme === 'dark' ? 9 : 1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    }}>
      <Group>
        <Icon size={40} strokeWidth={1.25}/>
        <Stack spacing={2.5}>
          <Text>{title}</Text>
          <Text size="xl" weight={500}>{value}</Text>
        </Stack>
      </Group>
    </Card>
  );
}
const defaultStatisticResponse: StatisticResponse = {
  totalCustomer: 0,
  totalProduct: 0,
  totalOrder: 0,
  totalWaybill: 0,
  totalReview: 0,
  totalActivePromotion: 0,
  totalSupplier: 0,
  totalBrand: 0,
  statisticRegistration: [],
  statisticOrder: [],
  statisticReview: [],
  statisticWaybill: [],
  statisticOrderByResource: [],
  statisticRevenueByDate:[],

  statisticRevenueByProduct: [],
  statisticProfitByDate: [],
  statisticProfitByProduct: [],

  //Báo cáo nhập hàng 
  totalPurchaseQuantity: 0,
  totalPurchaseValue: 0,
  statisticPurchaseBySupplier: [],
  statisticPurchaseByVariant: [],
  statisticPurchaseValueByDate: [],
  statisticPurchaseQuantityByDate: [],

  //Báo cáo tồn kho
  totalInventoryQuantity: 0,
  totalInventoryValue: 0,
  movingAverageCost: 0,
  inventoryProportion: 0,
};

function useGetStatisticApi() {
  const {
    data: statisticResponse,
    isLoading: isLoadingStatisticResponse,
    isError: isErrorStatisticResponse,
  } = useQuery<StatisticResponse, ErrorMessage>(
    ['api', 'stats', 'getStatistic'],
    () => FetchUtils.get(ResourceURL.STATISTIC),
    {
      onError: () => NotifyUtils.simpleFailed('Lấy dữ liệu không thành công'),
      keepPreviousData: true,
      initialData: defaultStatisticResponse,
    }
  );

  return { statisticResponse, isLoadingStatisticResponse, isErrorStatisticResponse };
}

export default AdminDashboard;
