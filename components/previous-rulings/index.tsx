import { mockedData } from "../../mocks/data";
import { MobilePreviousRulings } from "./mobile-previous-rulings";
import { TabletDesktopPreviousRulings } from "./tablet-desktop-previous-rulings";
import { Listbox, Transition } from "@headlessui/react";
import { FaCaretDown, FaCheck } from "react-icons/fa";
import { Fragment, useState } from "react";

const views = [{ name: "List" }, { name: "Grid" }];

const PreviousRulings = (): React.ReactElement => {
  const [selectedValue, setSelectedValue] = useState(views[0]);

  return (
    <div>
      <div className="flex justify-between px-3.5">
        <p className="text-2xl font-light lg:px-32">Previous Rulings</p>
        <div className="lg:px-32">
          <Listbox value={selectedValue} onChange={setSelectedValue}>
            <Listbox.Button className="relative w-32 border-2 border-black text-left px-5">
              <span className="block truncate">{selectedValue.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FaCaretDown
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-32 border-2 border-black py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {views.map((view) => (
                  <Listbox.Option
                    key={view.name}
                    className={({ active }) =>
                      `${active ? "text-black bg-gray-50" : "text-black"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                    }
                    value={view}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate`}
                        >
                          {view.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${active ? "text-black" : "text-black"}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <FaCheck className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
        </div>
      </div>
      <MobilePreviousRulings data={mockedData.data} />
      <TabletDesktopPreviousRulings
        data={mockedData.data}
        view={selectedValue.name}
      />
    </div>
  );
};

export { PreviousRulings };
