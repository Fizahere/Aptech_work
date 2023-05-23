

let getCities = () => {
    let countryName = document.getElementById('country').value;

    if (countryName == "pakistan") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let citiesDropdown = document.getElementById('cities');
                citiesDropdown.innerHTML = '';

                data.Pakistan.forEach(city => {
                    let option = document.createElement('option');
                    option.value = city;
                    option.text = city;
                    citiesDropdown.appendChild(option);
                });
            })

    }

    else if (countryName == "india") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let citiesDropdown = document.getElementById('cities');
                citiesDropdown.innerHTML = '';

                data.India.forEach(city => {
                    let option = document.createElement('option');
                    option.value = city;
                    option.text = city;
                    citiesDropdown.appendChild(option);
                });
            })

    }

    else if (countryName == "china") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let citiesDropdown = document.getElementById('cities');
                citiesDropdown.innerHTML = '';

                data.China.forEach(city => {
                    let option = document.createElement('option');
                    option.value = city;
                    option.text = city;
                    citiesDropdown.appendChild(option);
                });
            })

    }

    else {
        return 'hello';
    }
}

let getAptechBranches = () => {
    let cityName = document.getElementById('cities').value;
    //Pakitan cities branches

    if (cityName == "Karachi") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Karachi.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })

    }

    else if (cityName == "Lahore") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Lahore.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }

    else if (cityName == "Islamabad") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Islamabad.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }
    //Pakistan branches

    //india cities branches

    else if (cityName == "Mumbai") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Mumbai.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }

    else if (cityName == "Dehli") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Dehli.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }

    else if (cityName == "Lucknow") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Lucknow.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }


    //china cities branches

    else if (cityName == "Sanghai") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Sanghai.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }

    else if (cityName == "Beijing") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Beijing.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }

    else if (cityName == "Wuhan") {

        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let aptechBrachesDropdown = document.getElementById('aptechbranches');
                aptechBrachesDropdown.innerHTML = '';

                data.Wuhan.forEach(branch => {
                    let branchoption = document.createElement('option');
                    branchoption.value = branch;
                    branchoption.text = branch;
                    aptechBrachesDropdown.appendChild(branchoption);
                });
            })
    }

    else {
        return 'hello';
    }
}

let getPicture = () => {
    let branchName = document.getElementById('aptechbranches').value;
    //Pakitan cities branches

    if (branchName == "Aptech-SFC") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechSFC.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

           else if (branchName == "Aptech-metrostar") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechMetroStar.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

else if (branchName == "Aptech-Walton road") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechWaltonRoad.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-johar town") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechJoharTown.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-islamabad-1") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechIslamabad1.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-islamabad-2") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechIslamabad2.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Mumbai-1") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechMumbai1.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Mumbai-2") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechMumbai2.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Dehli-1") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechDehli1.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Dehli-2") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechDehli2.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Lucknow-1") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechLucknow1.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Lucknow-2") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechLucknow2.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Sanghai-1") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechSanghai1.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Sanghai-2") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechSanghai2.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Beijing-1") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechBeijing1.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Beijing-2") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechBeijing2.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Wuhan-1") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechWuhan1.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}

            else if (branchName == "Aptech-Wuhan-2") {
        // console.log('hello')
        fetch('index.json')
            .then(response => response.json())
            .then(data => {
                let picture = document.getElementById('main');
                picture.innerHTML = '';

                data.AptechWuhan2.forEach(image => {
                    let imageContainer = document.createElement('img');
                    imageContainer.src = image;

                    picture.appendChild(imageContainer);
                });
            })}


}

