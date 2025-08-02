import React, { Component, createRef } from "react";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      editId: null,
    };

    this.nameRef = createRef();
    this.capitalRef = createRef();
    this.populationRef = createRef();
    this.areaRef = createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const newCountry = {
      id: this.state.editId || new Date().getTime(),
      name: this.nameRef.current.value,
      capital: this.capitalRef.current.value,
      population: this.populationRef.current.value,
      area: this.areaRef.current.value,
    };

    if (this.state.editId) {
      this.setState((prevState) => ({
        countries: prevState.countries.map((item) =>
          item.id === prevState.editId ? newCountry : item
        ),
        editId: null,
      }));
    } else {
      this.setState((prevState) => ({
        countries: [...prevState.countries, newCountry],
      }));
    }

    this.nameRef.current.value = "";
    this.capitalRef.current.value = "";
    this.populationRef.current.value = "";
    this.areaRef.current.value = "";
  };

  handleEdit = (item) => {
    this.nameRef.current.value = item.name;
    this.capitalRef.current.value = item.capital;
    this.populationRef.current.value = item.population;
    this.areaRef.current.value = item.area;

    this.setState({ editId: item.id });
  };

  render() {
    const { countries, editId } = this.state;

    return (
      <section>
        <div className="container flex flex-col items-center justify-center py-[30px]">
          <div className="bg-slate-700 w-[650px] max-[670px]:w-[450px] max-[460px]:w-[350px] p-[30px] rounded-[5px] mb-6">
            <h2 className="text-[#fff] text-center mb-[30px] text-[30px] font-medium">
              {editId ? "Update Country" : "Create Country"}
            </h2>
            <form onSubmit={this.handleSubmit} className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[5px]">
                <label className="font-medium text-[#fff]">Country name</label>
                <input
                  required
                  ref={this.nameRef}
                  className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
                  type="text"
                  placeholder="Enter country name"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="font-medium text-[#fff]">Capital</label>
                <input
                  required
                  ref={this.capitalRef}
                  className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
                  type="text"
                  placeholder="Enter capital"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="font-medium text-[#fff]">Population</label>
                <input
                  required
                  ref={this.populationRef}
                  className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
                  type="number"
                  placeholder="Enter population"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label className="font-medium text-[#fff]">Area</label>
                <input
                  required
                  ref={this.areaRef}
                  className="bg-white p-[10px] outline-0 w-full rounded-2xl indent-2.5"
                  type="number"
                  placeholder="Enter area"
                />
              </div>
              <button
                type="submit"
                className="text-slate-950 bg-white py-[10px] font-medium rounded-2xl mt-[30px] hover:cursor-pointer outline-0 hover:text-white hover:bg-slate-700 duration-300 border border-[white]"
              >
                {editId ? "Update" : "Submit"}
              </button>
            </form>
          </div>

          <div className="grid grid-cols-4 max-[1251px]:grid-cols-3 max-[990px]:grid-cols-2 max-[650px]:grid-cols-1 gap-[30px]">
            {countries.map((item) => (
              <div
                key={item.id}
                onClick={() => this.handleEdit(item)}
                className="bg-white text-slate-900 w-[300px] p-[20px] rounded-[5px] shadow-lg cursor-pointer hover:shadow-xl duration-200"
              >
                <h3 className="text-[20px] font-semibold mb-2">Country Info:</h3>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Capital:</strong> {item.capital}</p>
                <p><strong>Population:</strong> {item.population}</p>
                <p><strong>Area:</strong> {item.area} km</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Country;
