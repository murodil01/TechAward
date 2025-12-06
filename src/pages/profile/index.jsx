import React, { useState } from "react";
import { Edit2, Save, X, User, Mail, Phone, MapPin, Users, Plus, Trash2, Camera, CheckCircle } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Mirodil Nurmamatov",
    email: "mirodil@example.com",
    phone: "+998 90 123 45 67",
    role: "Foydalanuvchi",
    avatar: "https://i.pravatar.cc/300?img=12",
    address: "Toshkent, Shayxontohur tumani",
    bio: "Tezkor tibbiy yordam xizmatlari bilan faol foydalanuvchi",
    oila: [
      { id: 1, name: "Malika Nurmamatova", relation: "Xotin", phone: "+998 90 111 22 33" },
      { id: 2, name: "Jasur Nurmamatov", relation: "O'g'il", phone: "+998 90 444 55 66" },
    ],
  });

  const [isEditingUser, setIsEditingUser] = useState(false);
  const [userFormData, setUserFormData] = useState(user);
  const [editingMemberId, setEditingMemberId] = useState(null);
  const [memberFormData, setMemberFormData] = useState({ name: "", relation: "", phone: "" });
  const [showAddMember, setShowAddMember] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUserChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const saveUser = () => {
    setUser(userFormData);
    setIsEditingUser(false);
    showSuccessMessage();
  };

  const startEditingMember = (member) => {
    setEditingMemberId(member.id);
    setMemberFormData({ name: member.name, relation: member.relation, phone: member.phone || "" });
  };

  const handleMemberChange = (e) => {
    setMemberFormData({ ...memberFormData, [e.target.name]: e.target.value });
  };

  const saveMember = () => {
    const updatedOila = user.oila.map((m) =>
      m.id === editingMemberId ? { ...m, ...memberFormData } : m
    );
    setUser({ ...user, oila: updatedOila });
    setEditingMemberId(null);
    showSuccessMessage();
  };

  const addNewMember = () => {
    if (memberFormData.name && memberFormData.relation) {
      setUser(prevUser => {
        const newMember = {
          id: Date.now(),
          name: memberFormData.name,
          relation: memberFormData.relation,
          phone: memberFormData.phone
        };
        return { ...prevUser, oila: [...prevUser.oila, newMember] };
      });
      setMemberFormData({ name: "", relation: "", phone: "" });
      setShowAddMember(false);
      showSuccessMessage();
    }
  };

  const deleteMember = (id) => {
    const updatedOila = user.oila.filter(m => m.id !== id);
    setUser({ ...user, oila: updatedOila });
    showSuccessMessage();
  };

  const showSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
      
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl flex items-center gap-2 animate-in slide-in-from-top">
          <CheckCircle size={20} />
          <span className="font-medium">Ma'lumotlar saqlandi!</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Cover Image */}
          <div className="h-32 sm:h-48 bg-linear-to-r from-red-500 via-pink-500 to-purple-600 relative">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          {/* Profile Section */}
          <div className="relative px-6 pb-6">
            {/* Avatar */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 sm:-mt-20">
              <div className="relative group">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-2xl object-cover"
                />
                <button className="absolute bottom-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <Camera size={18} />
                </button>
              </div>

              {/* User Info */}
              <div className="sm:ml-6 mt-4 sm:mt-0 flex-1 text-center sm:text-left">
                {!isEditingUser ? (
                  <>
                    <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                    <p className="text-red-600 font-medium mt-1">{user.role}</p>
                    <p className="text-gray-600 text-sm mt-2 max-w-2xl">{user.bio}</p>
                  </>
                ) : (
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      value={userFormData.name}
                      onChange={handleUserChange}
                      placeholder="Ism familiya"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="bio"
                      value={userFormData.bio}
                      onChange={handleUserChange}
                      placeholder="Bio"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Edit Button */}
              <div className="mt-4 sm:mt-0">
                {isEditingUser ? (
                  <div className="flex gap-2">
                    <button
                      onClick={saveUser}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Save size={18} />
                      Saqlash
                    </button>
                    <button
                      onClick={() => {
                        setIsEditingUser(false);
                        setUserFormData(user);
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsEditingUser(true)}
                    className="bg-linear-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Edit2 size={18} />
                    Tahrirlash
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <User className="text-red-600" size={24} />
                Aloqa ma'lumotlari
              </h3>

              {!isEditingUser ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Mail className="text-red-600 mt-1" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Email</p>
                      <p className="text-gray-900 font-medium">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <Phone className="text-red-600 mt-1" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Telefon</p>
                      <p className="text-gray-900 font-medium">{user.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <MapPin className="text-red-600 mt-1" size={20} />
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Manzil</p>
                      <p className="text-gray-900 font-medium">{user.address}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Mail size={16} className="text-red-600" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userFormData.email}
                      onChange={handleUserChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <Phone size={16} className="text-red-600" />
                      Telefon
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={userFormData.phone}
                      onChange={handleUserChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                      <MapPin size={16} className="text-red-600" />
                      Manzil
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={userFormData.address}
                      onChange={handleUserChange}
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Family Members */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Users className="text-red-600" size={24} />
                  Oila a'zolari ({user.oila.length})
                </h3>
                <button
                  onClick={() => setShowAddMember(!showAddMember)}
                  className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Plus size={18} />
                  Qo'shish
                </button>
              </div>

              {/* Add New Member Form */}
              {showAddMember && (
                <div className="mb-6 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Yangi a'zo qo'shish</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      name="name"
                      value={memberFormData.name}
                      onChange={handleMemberChange}
                      placeholder="Ism familiya"
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="relation"
                      value={memberFormData.relation}
                      onChange={handleMemberChange}
                      placeholder="Qarindoshlik"
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      name="phone"
                      value={memberFormData.phone}
                      onChange={handleMemberChange}
                      placeholder="Telefon"
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={addNewMember}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200"
                    >
                      <Save size={16} />
                      Saqlash
                    </button>
                    <button
                      onClick={() => {
                        setShowAddMember(false);
                        setMemberFormData({ name: "", relation: "", phone: "" });
                      }}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      Bekor qilish
                    </button>
                  </div>
                </div>
              )}

              {/* Family Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.oila.map((member) => (
                  <div
                    key={member.id}
                    className="group relative bg-linear-to-br from-gray-50 to-gray-100 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                  >
                    {editingMemberId === member.id ? (
                      <div className="space-y-3">
                        <input
                          type="text"
                          name="name"
                          value={memberFormData.name}
                          onChange={handleMemberChange}
                          placeholder="Ism"
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          name="relation"
                          value={memberFormData.relation}
                          onChange={handleMemberChange}
                          placeholder="Qarindoshlik"
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          name="phone"
                          value={memberFormData.phone}
                          onChange={handleMemberChange}
                          placeholder="Telefon"
                          className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={saveMember}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                          >
                            <Save size={16} />
                            Saqlash
                          </button>
                          <button
                            onClick={() => setEditingMemberId(null)}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-all duration-200"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-linear-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900 text-lg">{member.name}</h4>
                              <p className="text-red-600 text-sm font-medium">{member.relation}</p>
                            </div>
                          </div>
                        </div>

                        {member.phone && (
                          <div className="flex items-center gap-2 text-gray-600 text-sm mb-3 bg-white p-2 rounded-lg">
                            <Phone size={14} className="text-red-600" />
                            <span>{member.phone}</span>
                          </div>
                        )}

                        <div className="flex gap-2">
                          <button
                            onClick={() => startEditingMember(member)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-200"
                          >
                            <Edit2 size={14} />
                            Tahrirlash
                          </button>
                          <button
                            onClick={() => deleteMember(member.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {user.oila.length === 0 && (
                <div className="text-center py-12">
                  <Users size={48} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg">Hozircha oila a'zolari yo'q</p>
                  <p className="text-gray-400 text-sm mt-2">Yangi a'zo qo'shish uchun yuqoridagi tugmani bosing</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;