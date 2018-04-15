import React from 'react';
import ForecastTiles from './forecast_tiles';
import renderer from 'react-test-renderer';

describe('<ForecastTiles />', () => {
    test('renders correctly', () => {
        const forecastData = [
            {"dt":1523782800,"temp":{"day":55.4,"min":47.86,"max":55.4,"night":47.86,"eve":55.4,"morn":55.4},"pressure":1014.51,"humidity":48,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"speed":6.31,"deg":278,"clouds":12},
            {"dt":1523869200,"temp":{"day":59.58,"min":45.43,"max":59.88,"night":50.68,"eve":59.65,"morn":45.43},"pressure":1012.84,"humidity":77,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":4.38,"deg":273,"clouds":68,"rain":2.6},
            {"dt":1523955600,"temp":{"day":57.7,"min":44.82,"max":57.7,"night":54.39,"eve":56.71,"morn":44.82},"pressure":1007.91,"humidity":94,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":6.24,"deg":171,"clouds":92,"rain":8.58},
            {"dt":1524042000,"temp":{"day":48.18,"min":44.96,"max":51.28,"night":44.96,"eve":47.73,"morn":51.28},"pressure":1002.01,"humidity":93,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":15.35,"deg":337,"clouds":68,"rain":1.44},
            {"dt":1524128400,"temp":{"day":48.61,"min":42.12,"max":48.61,"night":42.12,"eve":46.38,"morn":48.61},"pressure":1000.05,"humidity":0,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"speed":23.11,"deg":328,"clouds":73,"rain":3.89}
        ];
        
        const component = renderer.create(<ForecastTiles loading={false} data={forecastData}/>);

        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});