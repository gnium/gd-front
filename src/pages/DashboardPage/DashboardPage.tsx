

// import useIsMobile from '../../hooks/useIsMobile';


const DashboardPage = () => {
    // const breakpoint = 768;
    // const { isMobile } = useIsMobile(breakpoint);

    // Data hardcoded


    return (
        <div>
            {/* <Header
                startSlots={[
                    {
                        type: 'title',
                        config: {
                            text: 'Tablero',
                            style: {
                                paddingLeft: isMobile ? '40px' : '10px'
                            }
                        }
                    }
                ]}
                endSlots={[
                    {
                        type: 'moreOptions',
                        config: {
                            onClick: () => console.log('More options clicked'),
                            icon: 'moreVertical',
                            style: { color: '#6c757d' }
                        }
                    }
                ]}
                className="app-header"
            />
            <main style={{
                padding: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                {
                    indicators.length > 0 ? <>
                        {indicators.map((indicator: any, index: number) => (
                            <IndicatorCard
                                containerStyle={{
                                    margin: 7
                                }}
                                key={index}
                                type={indicator.type}
                                title={indicator.title}
                                //measurementUnit={indicator.type === 'summary' ? '' : 'Unid.'}
                                measurementUnit={indicator.measurementUnit}
                                measurementUnitStyle={indicator.measurementUnitStyle}
                                //decimalPrecision={0}
                                data={indicator.data}
                                chartType={indicator.chartType}
                                decimalPlaces={indicator.decimalPlaces}
                                thousandSeparator={'.'}
                                decimalSeparator={','}
                            />
                        ))}
                    </> :
                        <NoContent
                            icon='cards'
                            message='Sin indicadores a mostrar'
                            iconColor={themeColors.primaryShade}
                        />
                }

            </main> */}
        </div>
    );
};

export default DashboardPage;
